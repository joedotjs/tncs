const http = require('http');
const server = http.createServer();
const backendTree = require('./actual-app');
const expressApp = require('./app');
backendTree(expressApp);

server.on('request', expressApp);

server.listen(1337, () => console.log('Server listening.'));