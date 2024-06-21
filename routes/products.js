const express = require('express');
const Product = require('../models/Product');
const Service = require('../models/Service');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await Product.find().populate('services');
  res.json(products);
});

router.post('/quote', async (req, res) => {
  const { productId, area, suburb, services, name, email, phone } = req.body;

  // Here you could add logic to save the quote request to your database

  // Simulate sending email or notification
  console.log(`Quote requested:
  Product ID: ${productId}
  Area: ${area}
  Suburb: ${suburb}
  Services: ${services.join(', ')}
  Name: ${name}
  Email: ${email}
  Phone: ${phone}`);

  res.json({ message: 'Thank you, an agent will contact you shortly!' });
});

module.exports = router;
