const express = require('express');
const Quote = require('../models/Quote');

const router = express.Router();

router.post('/', async (req, res) => {
  const { productId, area, suburb, services, name, email, phone } = req.body;

  const newQuote = new Quote({
    productId,
    area,
    suburb,
    services,
    name,
    email,
    phone,
  });

  try {
    await newQuote.save();
    res.status(201).json({ message: 'Quote request saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save quote request' });
  }
});

module.exports = router;
