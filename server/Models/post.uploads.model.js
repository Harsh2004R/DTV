const mongoose = require("mongoose");
const Media = mongoose.Schema({
    url: { require: true, type: String },
    caption: { require: true, type: String },
    likes: { type: Number },
    comments: [],
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }  // 👈 reffrence of which user upload post ?
}, { timestamp: true });

const PostMediaModel = mongoose.model("post", Media);

module.exports = { PostMediaModel };