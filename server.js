
const express = require('express');
const router = require('./server/router');
const bodyParser = require('body-parser');

const server = express();
server.use(express.static('.'));
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());
server.use('', router);
server.listen(8080);

module.exports = server;

console.log('Server started!');

