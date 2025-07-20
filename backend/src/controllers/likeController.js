// backend/src/controllers/likeController.js
const likeModel = require('../models/likeModel');

const getLikedProducts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const likedProducts = await likeModel.getLikedProductsByUserId(userId);
    res.json(likedProducts);
  } catch (error) {
    next(error);
  }
};

const likeProduct = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    await likeModel.likeProduct(userId, productId);
    res.status(201).json({ message: "Product liked" });
  } catch (error) {
    next(error);
  }
};

const unlikeProduct = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    await likeModel.unlikeProduct(userId, productId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLikedProducts,
  likeProduct,
  unlikeProduct,
};
