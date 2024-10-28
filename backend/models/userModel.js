const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    },

}, { timestamps: true })
const Users =  mongoose.model("Users", UserSchema);
module.exports = Users;
