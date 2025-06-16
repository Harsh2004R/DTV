// const multer = require("multer");
// const storage = multer.memoryStorage();

// const singleUpload = multer({ storage }).single("file");

// module.exports = { singleUpload };


const multer = require("multer");

const imageStorage = multer.memoryStorage();

const multerImageUpload = multer({
    storage: imageStorage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit for images
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed."));
        }
    }
}).single("file");

module.exports = { multerImageUpload };
