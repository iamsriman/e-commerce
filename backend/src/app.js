const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);


const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',  // your React frontend URL
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/products', productRoutes);

// Add more routes as needed

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
