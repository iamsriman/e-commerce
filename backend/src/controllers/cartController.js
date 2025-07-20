// backend/src/controllers/cartController.js
const cartModel = require('../models/cartModel');

const getUserCart = async (req, res, next) => {
  try {
    const userId = req.user.id; // mocked user
    const cartItems = await cartModel.getCartByUserId(userId);
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { product_id, quantity } = req.body;
    if (!product_id || !quantity) {
      return res.status(400).json({ message: 'Product ID and quantity required' });
    }

    const item = await cartModel.addToCart(userId, product_id, quantity);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    await cartModel.removeFromCart(userId, productId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserCart,
  addToCart,
  removeFromCart,
};
