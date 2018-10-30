import User from '../models/user';

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;

  res.status(400).json({ errors: { global: 'Invalid Credentials' } });
});

module.exports = router;
