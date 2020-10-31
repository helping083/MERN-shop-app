const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');

dotenv.config();
dbConnect();
const app = express();

app.get('/', (req, res) => {
  res.send('app is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.port || 5000;

app.listen(PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`));
