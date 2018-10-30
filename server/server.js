const mongoose = require('mongoose');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

const server = express();

mongoose.connect('mongodb://localhost/tvtracter');

server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../public')));

// API calls
server.use('/api/auth', auth);

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = server;
