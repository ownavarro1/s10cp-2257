const http = require('http');
const op = require('./operaciones');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hola desarrollador');
});

// console.log('mi nombre es: ', op.getNombre());

server.listen(8080);
