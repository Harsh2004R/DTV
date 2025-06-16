const multer = require("multer");

const videoStorage = multer.memoryStorage();

const videoUpload = multer({
  storage: videoStorage,
  limits: { fileSize: 30 * 1024 * 1024 }, // 30MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only video files are allowed."));
    }
  }
}).single("file");

module.exports = { videoUpload };
