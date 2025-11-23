const http = require('http')
const fs = require('fs')
const path = require('path')

function send404(resp) {
  resp.writeHead(404, {'content-type': 'text/plain'})
  resp.write('Error 404: Resource not found.')
  resp.end()
}

const mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
}

// direct run
const BASE_DIR = "./src/browserify"

const server = http.createServer(function(req, resp) {
  if (req.method === 'GET') {
    var fileurl
    if (req.url === '/') fileurl = '/index.html'
    else fileurl = req.url
    var filepath = path.resolve(BASE_DIR+fileurl)

    var fileExt = path.extname(filepath)
    var mimeType = mimeLookup[fileExt]
    if (!mimeType) {
      send404(resp)
      return
    }

    if(fs.existsSync(filepath)) {
      resp.writeHead(200, {'content-type': mimeType})
      fs.createReadStream(filepath).pipe(resp)
    } else {
      send404(resp)
      return
    }
  } else {
    send404(resp)
  }
}).listen(8002)
console.log('server running on port 8002')