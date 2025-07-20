// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET /api/products - list all products
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Server error fetching products' });
  }
});

module.exports = router;
