const mongoose = require("mongoose");
const PodAudioSchema = mongoose.Schema(
    {
        url: { type: String, required: true },
        title: { type: String, required: true }
    }
    , { timestamp: true }
)

const PodAudioModel = mongoose.model("podcast_urls", PodAudioSchema);
module.exports = { PodAudioModel };