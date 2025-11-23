import { io } from 'socket.io-client'
import $ from 'jquery'
window.$ = $

export function setUpClientSocket() {
  // ========================================================
  // Listen on count changes
  // ========================================================
  io.connect().on('message', function (count) {
    // console.log(count)
    $('#socketCount').html(`${count}`)
  })

  // ========================================================
  // Listen on JavaScript file changes
  // ========================================================
  $('body').append('<script id="script_a" src="/src/client/js/data.js"></script>')
  io.connect().on('script', function (path) {
    $('#script_a').remove()
    $('body').append(`<script id="script_a" src="${path}"></script>`)
  })
}
