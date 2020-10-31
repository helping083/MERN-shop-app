const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mogoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error connection ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
