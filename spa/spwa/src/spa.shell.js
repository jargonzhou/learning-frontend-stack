// ========================================================
// Shell: provide shape and structure of application.
//
// TODO:
// 1. Use `uriAnchor` jQuery plugin to process hash 
//   fragment to drive the application state. - P.88
// ========================================================

import './css/spa.shell.css'
import { chat } from './spa.chat'
import { model } from './spa.model'
import { uriAnchor } from './util/jquery.uriAnchor'
import { gevent } from './util/jquery.event.gevent'
import { avtr } from './spa.avtr'

export const shell = (function () {
  'use strict';
  // ========================================================
  // Variables
  // ========================================================
  var configMap = {
    main_html: String()
      + '<div class="spa-shell-head">'
      + '<div class="spa-shell-head-logo">'
      + '<h1>SPA</h1>'
      + '<p>javascript end to end</p>'
      + '</div>'
      + '<div class="spa-shell-head-acct"></div>'
      + '</div>'
      + '<div class="spa-shell-main">'
      + '<div class="spa-shell-main-nav"></div>'
      + '<div class="spa-shell-main-content"></div>'
      + '</div>'
      + '<div class="spa-shell-foot"></div>'
      + '<div class="spa-shell-modal"></div>',

    anchor_schema_map: {
      chat: { opened: true, closed: true }
    },

    resize_interval: 200,
  }

  var stateMap = {
    anchor_map: {},
    resize_idto: undefined
  }
  var jqueryMap = {}

  // ========================================================
  // Utilities Methods
  // ========================================================
  var copyAnchorMap = function () {
    return $.extend(true, {}, stateMap.anchor_map);
  }

  // ========================================================
  // DOM Methods
  // ========================================================
  var setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container: $container,
      $chat: $container.find('.spa-shell-chat'),
      $acct: $container.find('.spa-shell-head-acct'),
      $nav: $container.find('.spa-shell-main-nav')
    };
  };

  var changeAnchorPart = function (arg_map) {
    var
      anchor_map_revise = copyAnchorMap(),
      bool_return = true,
      key_name, key_name_dep;
    // Begin merge changes into anchor map
    KEYVAL:
    for (key_name in arg_map) {
      if (arg_map.hasOwnProperty(key_name)) {
        // skip dependent keys during iteration
        if (key_name.indexOf('_') === 0) { continue KEYVAL; }
        // update independent key value
        anchor_map_revise[key_name] = arg_map[key_name];
        // update matching dependent key
        key_name_dep = '_' + key_name;
        if (arg_map[key_name_dep]) {
          anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
        }
        else {
          delete anchor_map_revise[key_name_dep];
          delete anchor_map_revise['_s' + key_name_dep];
        }
      }
    }
    // End merge changes into anchor map
    // Begin attempt to update URI; revert if not successful
    try {
      uriAnchor.setAnchor(anchor_map_revise);
    }
    catch (error) {
      // replace URI with existing state
      uriAnchor.setAnchor(stateMap.anchor_map, null, true);
      bool_return = false;
    }
    // End attempt to update URI...
    return bool_return;
  }

  // ========================================================
  // Event Handler
  // ========================================================
  var onHashchange = function (event) {
    var
      _s_chat_previous, _s_chat_proposed, s_chat_proposed,
      anchor_map_proposed,
      is_ok = true,
      anchor_map_previous = copyAnchorMap();
    // attempt to parse anchor
    try {
      anchor_map_proposed = uriAnchor.makeAnchorMap();
    }
    catch (error) {
      uriAnchor.setAnchor(anchor_map_previous, null, true);
      return false;
    }
    stateMap.anchor_map = anchor_map_proposed;
    // convenience vars
    _s_chat_previous = anchor_map_previous._s_chat;
    _s_chat_proposed = anchor_map_proposed._s_chat;
    // Begin adjust chat component if changed
    if (!anchor_map_previous
      || _s_chat_previous !== _s_chat_proposed
    ) {
      s_chat_proposed = anchor_map_proposed.chat;
      switch (s_chat_proposed) {
        case 'opened':
          is_ok = chat.setSliderPosition('opened');
          break;
        case 'closed':
          is_ok = chat.setSliderPosition('closed');
          break;
        default:
          chat.setSliderPosition('closed');
          delete anchor_map_proposed.chat;
          uriAnchor.setAnchor(anchor_map_proposed, null, true);
      }
    }
    // Begin revert anchor if slider change denied
    if (!is_ok) {
      if (anchor_map_previous) {
        uriAnchor.setAnchor(anchor_map_previous, null, true);
        stateMap.anchor_map = anchor_map_previous;
      } else {
        delete anchor_map_proposed.chat;
        uriAnchor.setAnchor(anchor_map_proposed, null, true);
      }
    }
    return false;
  }

  var onResize = function () {
    if (stateMap.resize_idto) { return true; }
    chat.handleResize();
    stateMap.resize_idto = setTimeout(
      function () { stateMap.resize_idto = undefined; },
      configMap.resize_interval
    );
    return true;
  }

  var onTapAcct = function (event) {
    var acct_text, user_name
    const user = model.people.get_user();
    if (user.get_is_anon()) {
      user_name = prompt('Please sign-in');
      model.people.login(user_name);
      jqueryMap.$acct.text('... processing ...');
    }
    else {
      model.people.logout();
    }
    return false;
  }

  var onLogin = function (event, login_user) {
    jqueryMap.$acct.text(login_user.name);
  }

  var onLogout = function (event, logout_user) {
    jqueryMap.$acct.text('Please sign-in');
  }

  // ========================================================
  // Callbacks
  // ========================================================
  var setChatAnchor = function (position_type) {
    return changeAnchorPart({ chat: position_type });
  }

  // ========================================================
  // Public Methods
  // ========================================================
  var initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();

    // configure uriAnchor to use our schema
    uriAnchor.configModule({
      schema_map: configMap.anchor_schema_map
    });

    chat.configModule({
      set_chat_anchor: setChatAnchor,
      chat_model: model.chat,
      people_model: model.people
    })
    chat.initModule(jqueryMap.$container)

    avtr.configModule({
      chat_model: model.chat,
      people_model: model.people
    })
    avtr.initModule(jqueryMap.$nav)

    $(window)
      .on('resize', onResize)
      .on('hashchange', onHashchange)
      .trigger('hashchange');

    gevent.subscribe($container, 'spa-login', onLogin);
    gevent.subscribe($container, 'spa-logout', onLogout);
    jqueryMap.$acct
      .text('Please sign-in')
      // .bind('utap', onTapAcct);
      .click(onTapAcct)
  };

  return { initModule: initModule }
})()
