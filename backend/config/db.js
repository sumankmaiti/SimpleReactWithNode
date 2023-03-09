require('dotenv').config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        // console.log(process.env);
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log('MongoDB connection SUCCESS');
    } catch(error) {
        console.log('MongoDB connection FAIL', error);
        process.exit(1)
    }
}

module.exports = connectDB