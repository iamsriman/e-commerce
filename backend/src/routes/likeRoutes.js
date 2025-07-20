// backend/src/routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.get('/', likeController.getLikedProducts);
router.post('/:productId', likeController.likeProduct);
router.delete('/:productId', likeController.unlikeProduct);

module.exports = router;
