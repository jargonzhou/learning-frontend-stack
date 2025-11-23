// ========================================================
// Data
// ========================================================
import { io } from "socket.io-client";

export const data = (function () {
  'use strict';

  // ========================================================
  // Variables
  // ========================================================
  var stateMap = { sio: null }

  // ========================================================
  // Utility Methods
  // ========================================================
  var makeSio = function () {
    var socket = io.connect('/chat');
    return {
      emit: function (event_name, data) {
        socket.emit(event_name, data);
      },
      on: function (event_name, callback) {
        socket.on(event_name, function () {
          callback(arguments);
        });
      }
    };
  }

  // ========================================================
  // Public Methods
  // ========================================================
  var getSio = function () {
    if (!stateMap.sio) { stateMap.sio = makeSio(); }
    return stateMap.sio;
  }

  var initModule = function () {
  }

  return {
    initModule: initModule,
    getSio: getSio
  }
})()