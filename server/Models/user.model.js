const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profile_picture:{type: String},
   
})

const UserModel = mongoose.model("user", userSchema);


module.exports = { UserModel }