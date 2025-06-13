const express = require("express");
const { PostMediaModel } = require("../Models/post.uploads.model.js");
const { singleUpload } = require("../Middlewares/multer.js");
const { cloudinary } = require("../Config/Cloudinary.js");
const  authenticate  = require("../Middlewares/auth.middleware.js")
const PostUploadRouter = express.Router();


PostUploadRouter.post("/post/upload", singleUpload, async (req, res) => {
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
        res.status(405).json({ msg: "error in sending responce of post upload collecion", error });
    }
})


















module.exports = { PostUploadRouter };