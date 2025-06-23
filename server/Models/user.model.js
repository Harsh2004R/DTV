const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profile_picture: { type: String, default: "https://github.com/Harsh2004R/DTV/blob/main/dare-to-visit/src/assets/default_user_profile.jpeg?raw=true" },
    about: { type: String, default: "" },
    profession: { type: String, default: "" },
    intrest: { type: String, default: "" },
    follower: { type: String, default: "" },
    following: { type: String, default: "" },
    isBlocked: { type: Boolean, default: false }

})

const UserModel = mongoose.model("user", userSchema);


module.exports = { UserModel }