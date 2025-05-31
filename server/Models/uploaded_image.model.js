const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    fileName: String,
    githubUrl: String,
    caption: String,
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const UploadedImageModel = mongoose.model('image', imageSchema);
module.exports = { UploadedImageModel }
