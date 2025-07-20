// backend/src/middleware/authMiddleware.js
const mockUserMiddleware = (req, res, next) => {
  // hardcode user id = 1 for testing
  req.user = {
    id: 1,
    username: 'testuser',
  };
  next();
};

module.exports = mockUserMiddleware;
