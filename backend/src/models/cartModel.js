// backend/src/models/cartModel.js
const db = require('../config/db');

const getCartByUserId = async (userId) => {
  const result = await db.query(
    `SELECT c.id, c.product_id, p.name, p.price, c.quantity FROM cart c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = $1`,
    [userId]
  );
  return result.rows;
};

const addToCart = async (userId, productId, quantity) => {
  // Check if product already in cart
  const exists = await db.query(
    'SELECT * FROM cart WHERE user_id=$1 AND product_id=$2',
    [userId, productId]
  );

  if (exists.rows.length > 0) {
    // Update quantity
    const result = await db.query(
      'UPDATE cart SET quantity = quantity + $1 WHERE user_id=$2 AND product_id=$3 RETURNING *',
      [quantity, userId, productId]
    );
    return result.rows[0];
  } else {
    const result = await db.query(
      'INSERT INTO cart(user_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *',
      [userId, productId, quantity]
    );
    return result.rows[0];
  }
};

const removeFromCart = async (userId, productId) => {
  await db.query('DELETE FROM cart WHERE user_id=$1 AND product_id=$2', [
    userId,
    productId,
  ]);
};

const clearCart = async (userId) => {
  await db.query('DELETE FROM cart WHERE user_id=$1', [userId]);
};

module.exports = {
  getCartByUserId,
  addToCart,
  removeFromCart,
  clearCart,
};
