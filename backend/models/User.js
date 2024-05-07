const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model("user", userSchema);

module.exports = User;