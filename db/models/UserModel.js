const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    LongLiveToken: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);