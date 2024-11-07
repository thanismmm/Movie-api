const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log({ message: error.message });
    process.exit(1);
  }
};

module.exports = connectDB;
