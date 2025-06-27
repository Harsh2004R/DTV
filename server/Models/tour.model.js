const mongoose = require("mongoose");
const TourSchema = mongoose.Schema(
    {
        url: { typeof: String, require: true },
        audio_url: { typeof: String, require: true },
        title: { typeof: String, require: true },
        description: { typeof: String, require: true },

    },
    {
        timestamps: true,
    }
)
const TourModel = mongoose.model("tour", TourSchema)
module.exports = { TourModel };








