const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const dbConnect = require('./config/db');

dotenv.config();
dbConnect()
    .then(() => {
      // callback();
      console.log('db connected');
    })
    .catch((err) => {
      console.error(`Error: ${error.message}`.red.underline.bold);
      process.exit(1);
    });

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

const server = app.listen(PORT,
    // eslint-disable-next-line max-len
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));

process.on('unhandledRejection', (err) => {
  console.log('err', err.name, err.message);
  console.log('unhadled rejection');
  server.close(() => {
    process.exit(1);
  });
});
