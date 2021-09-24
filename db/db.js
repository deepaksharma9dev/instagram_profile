require('dotenv').config();
const mongoose = require('mongoose');
let db = process.env.mongoUri;

module.exports.connect_db = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database has connected successfully");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

};