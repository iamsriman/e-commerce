// backend/src/controllers/orderController.js
const orderModel = require('../models/orderModel');

const createOrder = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const products = req.body.products; // [{product_id, quantity}]

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: 'Products are required for order' });
    }

    const order = await orderModel.createOrder(userId, products);

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const orders = await orderModel.getOrdersByUserId(userId);
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getOrders,
};
