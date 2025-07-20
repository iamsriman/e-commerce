// backend/src/routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
router.get('/', (req, res) => {
  // Replace with actual DB logic
  res.json([]); // empty cart items for now
});
router.get('/', cartController.getUserCart);
router.post('/', cartController.addToCart);
router.delete('/:productId', cartController.removeFromCart);

module.exports = router;
