// ========================================================
// Fake
// ========================================================
import { model } from "./spa.model";

export const fake = (function () {
  'use strict';

  // ========================================================
  // Variables
  // ========================================================
  var fakeIdSerial = 5

  // ========================================================
  // Utilities Methods
  // ========================================================
  var makeFakeId = function () {
    return 'id_' + String(fakeIdSerial++);
  }

  // ========================================================
  // Public Methods
  // ========================================================
  var peopleList = [
    {
      name: 'Betty', _id: 'id_01',
      css_map: {
        top: 20, left: 20,
        'background-color': 'rgb( 128, 128, 128)'
      }
    },
    {
      name: 'Mike', _id: 'id_02',
      css_map: {
        top: 60, left: 20,
        'background-color': 'rgb( 128, 255, 128)'
      }
    },
    {
      name: 'Pebbles', _id: 'id_03',
      css_map: {
        top: 100, left: 20,
        'background-color': 'rgb( 128, 192, 192)'
      }
    },
    {
      name: 'Wilma', _id: 'id_04',
      css_map: {
        top: 140, left: 20,
        'background-color': 'rgb( 192, 128, 128)'
      }
    }
  ]

  var mockSio = (function () {
    var callback_map = {}
    var listchange_idto = undefined

    var on_sio = function (msg_type, callback) {
      callback_map[msg_type] = callback;
    };
    
    var emit_sio = function (msg_type, data) {
      var person_map;
      // respond to 'adduser' event with 'userupdate'
      // callback after a 3s delay
      //
      if (msg_type === 'adduser' && callback_map.userupdate) {
        setTimeout(function () {
          person_map = {
            _id: makeFakeId(),
            name: data.name,
            css_map: data.css_map
          };
          peopleList.push(person_map);
          callback_map.userupdate(person_map);
        }, 3000);
      }

      if (msg_type === 'updatechat' && callback_map.updatechat) {
        setTimeout(function () {
          var user = model.people.get_user();
          callback_map.updatechat([{
            dest_id: user.id,
            dest_name: user.name,
            sender_id: data.dest_id,
            msg_text: 'Thanks for the note, ' + user.name
          }]);
        }, 2000);
      }
      if (msg_type === 'leavechat') {
        // reset login status
        delete callback_map.listchange;
        delete callback_map.updatechat;
        if (listchange_idto) {
          clearTimeout(listchange_idto);
          listchange_idto = undefined;
        }
        send_listchange();
      }

      if (msg_type === 'updateavatar' && callback_map.listchange) {
        // simulate receipt of 'listchange' message
        for (i = 0; i < peopleList.length; i++) {
          if (peopleList[i]._id === data.person_id) {
            peopleList[i].css_map = data.css_map;
            break;
          }
        }
        // execute callback for the 'listchange' message
        callback_map.listchange([peopleList]);
      }
    };

    var emit_mock_msg = function () {
      setTimeout(function () {
        var user = model.people.get_user();
        if (callback_map.updatechat) {
          callback_map.updatechat([{
            dest_id: user.id,
            dest_name: user.name,
            sender_id: 'id_04',
            msg_text: 'Hi there ' + user.name + '! Wilma here.'
          }]);
        }
        else { emit_mock_msg(); }
      }, 8000);
    }

    var send_listchange = function () {
      listchange_idto = setTimeout(function () {
        if (callback_map.listchange) {
          callback_map.listchange([peopleList]);

          emit_mock_msg();

          listchange_idto = undefined;
        }
        else { send_listchange(); }
      }, 1000);
    }

    send_listchange()

    return {
      emit: emit_sio,
      on: on_sio
    };
  }())

  return {
    mockSio: mockSio
  }
})()