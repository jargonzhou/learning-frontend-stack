const http = require('http');

var msg = 'Hello NodeJS';
console.log(msg);

// HTTP: https://nodejs.org/api/http.html
const PORT = process.env.PORT || 8000;
const server = http.createServer(function (req, resp) {
  resp.writeHead(200, { 'Content-Type': 'application/json' });
  resp.end(JSON.stringify({ 'msg': msg }));
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(PORT);

console.log(`Server running on ${PORT}`);

