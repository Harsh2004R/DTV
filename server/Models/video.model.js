const mongoose = require("mongoose");
const VideoSchema = mongoose.Schema(
    {
        video_url: { type: String, required: true },
        catogery: { type: String, required: true },

    }, { timestamp: true }
)