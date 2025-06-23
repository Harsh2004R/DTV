const mongoose = require("mongoose");
const Media = mongoose.Schema(
    {
        url: { required: true, type: String },
        caption: { required: true, type: String },
        likes: { type: Number, default: 0 },
        likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
        comments: [
            {
                user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
                comment: String,
                _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
                createdAt: { type: Date, default: Date.now }
            }
        ],
        uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true } // 👈 reffrence of which user uploaded which post ?
    },
    { timestamps: true }
);
const PostMediaModel = mongoose.model("post", Media);
module.exports = { PostMediaModel };
