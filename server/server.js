const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// server.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );

// server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../public')));

// API calls
server.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: 'Invalid Credentials' } });
});

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = server;
