const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');
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

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(notFound);
app.use(errorHandler);

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
