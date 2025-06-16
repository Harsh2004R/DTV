const mongoose = require("mongoose");
const Media = mongoose.Schema(
    {
        url: { required: true, type: String },
        caption: { required: true, type: String },
        likes: { type: Number, default: 0 },
        comments: [],
        uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true } // 👈 reffrence of which user uploaded which post ?
    },
    { timestamps: true }
);
const ReelsMediaModel = mongoose.model("reels", Media);
module.exports = { ReelsMediaModel };
