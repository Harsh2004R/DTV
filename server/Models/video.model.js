const mongoose = require("mongoose");
const VideoSchema = mongoose.Schema(
    {
        video_url: { type: String, required: true },
        video_title: { type: String, required: true },
        category: { type: String, required: true },
        theme: { type: Number, required: true }

    }, { timestamp: true }
)

const VideoModel = mongoose.model("video", VideoSchema)
module.exports = { VideoModel };