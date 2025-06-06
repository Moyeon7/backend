const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    profileImage: { type: String } // Field to store the image path
}, { collection: 'User_profile' }); // Change collection name to 'userinfos'

module.exports = mongoose.model("User_profile", userSchema);