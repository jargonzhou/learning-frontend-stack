import { Server as SocketIOServer } from "socket.io";
import fs from 'fs'

export function setUpSocket(server, app) {
  const io = new SocketIOServer(server)
  io.on('connect', () => {
    console.log('Socket connected')
  })

  var countIdx = 0
  function countUp() {
    countIdx++
    // console.log(countIdx)
    io.sockets.send(countIdx)
  }

  setInterval(countUp, 3000)

  // ========================================================
  // Update JavaScript file changes
  // ========================================================
  var watchMap = {}

  function setWatch(url_path, file_type) {
    if (!watchMap[url_path]) {
      console.log(`Set watch on ${url_path}`)
      fs.watchFile(url_path.slice(1), function (current, previous) {
        console.log(`File accessed: ${url_path}`)
        if (current.mtime !== previous.mtime) {
          console.log(`File changed: ${url_path}`)
          io.sockets.emit(file_type, url_path)
        }
      })
      watchMap[url_path] = true
    }
  }

  app.use(function (req, res, next) {
    if (req.url.indexOf('/js/') >= 0) {
      setWatch(req.url, 'script')
    }
    next()
  })

  // mock file changed
  // setInterval(function() {
  //   console.log(watchMap)
  //   // console.log(process.env)
  //   fs.writeFileSync('src/client/js/data.js', 'console.log("data: ' + new Date().getTime() + '")')
  // }, 5000)
}
