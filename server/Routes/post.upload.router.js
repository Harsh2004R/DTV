const express = require("express");
const { PostMediaModel } = require("../Models/post.uploads.model.js");
const { multerImageUpload } = require("../Middlewares/uploadImage.js");
const { cloudinary } = require("../Config/Cloudinary.js");
const authenticate = require("../Middlewares/auth.middleware.js");
const { videoUpload } = require("../Middlewares/uploadVideo.js");
const { ReelsMediaModel } = require("../Models/reels.media,model.js");
const PostUploadRouter = express.Router();


PostUploadRouter.post("/post/upload", multerImageUpload, async (req, res) => {
    try {
        const file = req.file;
        const { caption, userId } = req.body;

        if (!file || !caption || !userId) {
            return res.status(400).json({ message: "File and caption & userId are required." });
        }

        // Upload to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload_stream(
            { folder: "post_uploads" },
            async (error, result) => {
                if (error) return res.status(500).json({ error });

                const newPost = new PostMediaModel({
                    url: result.secure_url,
                    caption,
                    likes: 0,
                    comments: [],
                    uploadedBy: userId
                });

                await newPost.save();

                res.status(201).json({ message: "Upload successful", data: newPost });
            }
        );

        // Stream file buffer
        require("streamifier").createReadStream(file.buffer).pipe(uploadResponse);
    } catch (err) {
        res.status(500).json({ message: "Upload failed", error: err.message });
    }
});


PostUploadRouter.get("/uploaded-post/get", authenticate, async (req, res) => {
    try {
        const postData = await PostMediaModel.find({ uploadedBy: req.userId }).populate(
            "uploadedBy",
            "name email profile_picture"
        );
        res.status(200).json({ msg: "your all uploaded post data here...", data: postData });
    } catch (error) {
        res.status(405).json({ msg: "error in sending responce of post upload collecion", error: error.message });
    }
})

PostUploadRouter.get("/uploaded-post/get/all", authenticate, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const skip = (page - 1) * limit;

        const allData = await PostMediaModel.find()
            .skip(skip)
            .limit(limit)
            .populate(
                "uploadedBy",
                "name profile_picture"
            );
        res.status(200).json({ msg: "your all uploaded post data here...", data: allData });
    } catch (error) {
        res.status(405).json({ msg: "error in sending responce of post upload collecion", error: error.message });
    }
})


// video uploading route here..............
PostUploadRouter.post("/video/upload", videoUpload, async (req, res) => {
    try {
        const file = req.file;
        const { caption, userId } = req.body;

        if (!file || !caption || !userId) {
            return res.status(400).json({ message: "File, caption, and userId are required." });
        }

        // Upload to Cloudinary
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "video_uploads", resource_type: "video" },
            async (error, result) => {
                if (error) return res.status(500).json({ error: error.message });

                const newPost = new ReelsMediaModel({
                    url: result.secure_url,
                    caption,
                    likes: 0,
                    comments: [],
                    uploadedBy: userId,
                    type: "video"
                });

                await newPost.save();

                res.status(201).json({ message: "Video uploaded successfully", data: newPost });
            }
        );

        require("streamifier").createReadStream(file.buffer).pipe(uploadStream);
    } catch (err) {
        res.status(500).json({ message: "Upload failed", error: err.message });
    }
});


PostUploadRouter.get("/uploaded-reels/get", authenticate, async (req, res) => {
    try {
        const reelData = await ReelsMediaModel.find({ uploadedBy: req.userId }).populate(
            "uploadedBy",
            "name email profile_picture"
        );
        res.status(200).json({ msg: "your all uploaded post data here...", data: reelData });
    } catch (error) {
        res.status(405).json({ msg: "error in sending responce of post upload collecion", error: error.message });
    }
})

PostUploadRouter.get("/uploaded-reels/get/all", authenticate, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const allData = await ReelsMediaModel.find()
            .skip(skip)
            .limit(limit)
            .populate("uploadedBy", "name profile_picture");

        res.status(200).json({ msg: "Reels fetched", data: allData });
    } catch (error) {
        res.status(405).json({ msg: "Error fetching reels", error: error.message });
    }
});



module.exports = { PostUploadRouter };