// ========================================================
// Model
// ========================================================
import { taffy as TAFFY } from "taffydb";
import { fake } from "./spa.fake";
import { data } from "./spa.data";
import { gevent } from './util/jquery.event.gevent'

export const model = (function () {
  'use strict';

  // ========================================================
  // Variables
  // ========================================================
  var configMap = { anon_id: 'a0' }
  var stateMap = {
    anon_user: null,
    cid_serial: 0,
    people_cid_map: {},
    people_db: TAFFY(),
    user: null,
    is_connected: false,
  }

  // DEV_ENV
  var isFakeData = true
  // var isFakeData = false

  // ========================================================
  // Utilities Methods
  // ========================================================
  var personProto = {
    get_is_user: function () {
      return this.cid === stateMap.user.cid;
    },
    get_is_anon: function () {
      return this.cid === stateMap.anon_user.cid;
    }
  }

  var makePerson = function (person_map) {
    var person,
      cid = person_map.cid,
      css_map = person_map.css_map,
      id = person_map.id,
      name = person_map.name;
    if (cid === undefined || !name) {
      throw 'client id and name required';
    }
    person = Object.create(personProto);
    person.cid = cid;
    person.name = name;
    person.css_map = css_map;
    if (id) { person.id = id; }
    stateMap.people_cid_map[cid] = person;
    stateMap.people_db.insert(person);
    return person;
  }

  var makeCid = function () {
    return 'c' + String(stateMap.cid_serial++);
  };
  var clearPeopleDb = function () {
    var user = stateMap.user;
    stateMap.people_db = TAFFY();
    stateMap.people_cid_map = {};
    if (user) {
      stateMap.people_db.insert(user);
      stateMap.people_cid_map[user.cid] = user;
    }
  }

  var completeLogin = function (user_list) {
    var user_map = user_list
    delete stateMap.people_cid_map[user_map._id];
    stateMap.user.cid = user_map._id;
    stateMap.user.id = user_map._id;
    stateMap.user.css_map = user_map.css_map;
    stateMap.people_cid_map[user_map._id] = stateMap.user;

    chat.join()

    gevent.publish('spa-login', [stateMap.user]);
  }

  var removePerson = function (person) {
    if (!person) { return false; }
    // can't remove anonymous person
    if (person.id === configMap.anon_id) {
      return false;
    }
    stateMap.people_db({ cid: person.cid }).remove();
    if (person.cid) {
      delete stateMap.people_cid_map[person.cid];
    }
    return true;
  }

  // ========================================================
  // Public Methods
  // ========================================================
  var people = (function () {
    var get_by_cid = function (cid) {
      return stateMap.people_cid_map[cid];
    };
    var get_db = function () { return stateMap.people_db; };
    var get_user = function () { return stateMap.user; };
    var login = function (name) {
      var sio = isFakeData ? fake.mockSio : data.getSio();
      stateMap.user = makePerson({
        cid: makeCid(),
        css_map: { top: 25, left: 25, 'background-color': '#8f8' },
        name: name
      });
      sio.on('userupdate', completeLogin);
      sio.emit('adduser', {
        cid: stateMap.user.cid,
        css_map: stateMap.user.css_map,
        name: stateMap.user.name
      });
    }

    var logout = function () {
      var user = stateMap.user;

      chat._leave()

      stateMap.user = stateMap.anon_user;
      clearPeopleDb()
      gevent.publish('spa-logout', [user]);
    }

    return {
      get_by_cid: get_by_cid,
      get_db: get_db,
      get_user: get_user,
      login: login,
      logout: logout
    };
  }());

  var chat = (function () {
    var chatee = null

    // Begin internal methods
    var _update_list = function (arg_list) {
      var i, person_map, make_person_map
      var people_list = arg_list[0];
      var is_chatee_online = false
      var person

      clearPeopleDb();
      PERSON:
      for (i = 0; i < people_list.length; i++) {
        person_map = people_list[i];
        if (!person_map.name) { continue PERSON; }
        // if user defined, update css_map and skip remainder
        if (stateMap.user && stateMap.user.id === person_map._id) {
          stateMap.user.css_map = person_map.css_map;
          continue PERSON;
        }
        make_person_map = {
          cid: person_map._id,
          css_map: person_map.css_map,
          id: person_map._id,
          name: person_map.name
        };
        person = makePerson( make_person_map )
        if (chatee && chatee.id === make_person_map.id) {
          is_chatee_online = true;
          chatee = person
        }
      }
      stateMap.people_db.sort('name');
      if (chatee && !is_chatee_online) { set_chatee(''); }
    };

    var _publish_listchange = function (arg_list) {
      _update_list(arg_list);
      gevent.publish('spa-listchange', [arg_list]);
    };
    var _publish_updatechat = function (arg_list) {
      var msg_map = arg_list[0];
      if (!chatee) { set_chatee(msg_map.sender_id); }
      else if (msg_map.sender_id !== stateMap.user.id
        && msg_map.sender_id !== chatee.id
      ) { set_chatee(msg_map.sender_id); }
      gevent.publish('spa-updatechat', [msg_map]);
    }
    // End internal methods

    var _leave_chat = function () {
      var sio = isFakeData ? fake.mockSio : data.getSio();
      chatee = null
      stateMap.is_connected = false;
      if (sio) { sio.emit('leavechat'); }
    };

    var get_chatee = function () { return chatee; }

    var join_chat = function () {
      var sio;
      if (stateMap.is_connected) { return false; }
      if (stateMap.user.get_is_anon()) {
        console.warn('User must be defined before joining chat');
        return false;
      }
      sio = isFakeData ? fake.mockSio : data.getSio();
      sio.on('listchange', _publish_listchange);
      sio.on('updatechat', _publish_updatechat);
      stateMap.is_connected = true;
      return true;
    };

    var send_msg = function (msg_text) {
      var msg_map,
        sio = isFakeData ? fake.mockSio : data.getSio();
      if (!sio) { return false; }
      if (!(stateMap.user && chatee)) { return false; }
      msg_map = {
        dest_id: chatee.id,
        dest_name: chatee.name,
        sender_id: stateMap.user.id,
        msg_text: msg_text
      };
      // we published updatechat so we can show our outgoing messages
      _publish_updatechat([msg_map]);
      sio.emit('updatechat', msg_map);
      return true;
    }

    var set_chatee = function (person_id) {
      var new_chatee;
      new_chatee = stateMap.people_cid_map[person_id];
      if (new_chatee) {
        if (chatee && chatee.id === new_chatee.id) {
          return false;
        }
      }
      else {
        new_chatee = null;
      }
      gevent.publish('spa-setchatee',
        { old_chatee: chatee, new_chatee: new_chatee }
      );
      chatee = new_chatee;
      return true;
    }

    var update_avatar = function (avatar_update_map) {
      var sio = isFakeData ? fake.mockSio : data.getSio();
      if (sio) {
        sio.emit('updateavatar', avatar_update_map);
      }
    }

    return {
      _leave: _leave_chat,
      get_chatee: get_chatee,
      join: join_chat,
      send_msg: send_msg,
      set_chatee: set_chatee,
      update_avatar: update_avatar
    };
  }())

  var initModule = function () {
    // initialize anonymous person
    stateMap.anon_user = makePerson({
      cid: configMap.anon_id,
      id: configMap.anon_id,
      name: 'anonymous'
    });
    stateMap.user = stateMap.anon_user;
  }

  return {
    initModule: initModule,
    people: people,
    chat: chat
  }
})()