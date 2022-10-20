const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  console.log(new Date().toISOString(), req.headers);
  res.end('Hi! test');
}

const server = http.createServer(requestListener);
server.listen(8080);
