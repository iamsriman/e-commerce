// backend/src/models/orderModel.js
const db = require('../config/db');

const createOrder = async (userId, products) => {
  // products = [{product_id, quantity}, ...]

  try {
    await db.query('BEGIN');

    const orderResult = await db.query(
      'INSERT INTO orders(user_id, order_date) VALUES($1, NOW()) RETURNING *',
      [userId]
    );
    const order = orderResult.rows[0];

    for (const product of products) {
      await db.query(
        'INSERT INTO order_items(order_id, product_id, quantity) VALUES($1, $2, $3)',
        [order.id, product.product_id, product.quantity]
      );
    }

    // Optionally clear cart after order
    await db.query('DELETE FROM cart WHERE user_id=$1', [userId]);

    await db.query('COMMIT');

    return order;
  } catch (err) {
    await db.query('ROLLBACK');
    throw err;
  }
};

const getOrdersByUserId = async (userId) => {
  const orders = await db.query(
    'SELECT * FROM orders WHERE user_id=$1 ORDER BY order_date DESC',
    [userId]
  );

  const orderList = [];

  for (const order of orders.rows) {
    const items = await db.query(
      `SELECT oi.product_id, p.name, p.price, oi.quantity
          FROM order_items oi
          JOIN products p ON oi.product_id = p.id
          WHERE oi.order_id = $1`,
      [order.id]
    );
    orderList.push({
      ...order,
      items: items.rows,
    });
  }

  return orderList;
};

module.exports = {
  createOrder,
  getOrdersByUserId,
};
