const mongoose = require("mongoose");
const Media = mongoose.Schema({
    url: { require: true, type: String },
    caption: { require: true, type: String },
    likes: { type: Number },
    comments: [],

}, { timestamp: true });

const PostMediaModel = mongoose.model("post", Media);

module.exports = { PostMediaModel };