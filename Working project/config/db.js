require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () =>{

    const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';

    try {
        await mongoose.connect(dbURI);
        console.log(`MongoDB is connected 🗄️`);
    } catch (error) {
        console.error(`MongoDB Connection Failed`,error.message);
        process.exit(1);
    }
};

module.exports = connectDB;