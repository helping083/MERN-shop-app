const mongoose = require('mongoose');

const mongoConnection = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;
