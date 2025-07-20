// backend/src/models/likeModel.js
const db = require('../config/db');

const getLikedProductsByUserId = async (userId) => {
  const result = await db.query(
    `SELECT p.* FROM likes l 
       JOIN products p ON l.product_id = p.id 
       WHERE l.user_id = $1`,
    [userId]
  );
  return result.rows;
};

const likeProduct = async (userId, productId) => {
  const exists = await db.query(
    'SELECT * FROM likes WHERE user_id=$1 AND product_id=$2',
    [userId, productId]
  );

  if (exists.rows.length === 0) {
    await db.query(
      'INSERT INTO likes(user_id, product_id) VALUES($1, $2)',
      [userId, productId]
    );
  }
};

const unlikeProduct = async (userId, productId) => {
  await db.query('DELETE FROM likes WHERE user_id=$1 AND product_id=$2', [
    userId,
    productId,
  ]);
};

module.exports = {
  getLikedProductsByUserId,
  likeProduct,
  unlikeProduct,
};
