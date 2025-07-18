const express = require("express");
const { VideoModel } = require("../Models/video.model.js");
const VideoRouter = express.Router();



VideoRouter.post("/post/video", async (req, res) => {

    const { video_url, video_title, category, theme } = req.body;
    const alreadyExist = await VideoModel.findOne({ video_url: video_url })
    if (alreadyExist) {
        return res.status(303).json({ error: "Video already exist" });
    }
    try {
        const videoData = new VideoModel({ video_url: video_url, video_title: video_title, category: category, theme: theme })
        await videoData.save();
        res.status(201).json({ message: "Video posted successfully", data: videoData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in posting data", error: error.message });
    }
})


VideoRouter.get("/get/videos", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const category = req.query.category || null;
        const skip = (page - 1) * limit;
        const query = {};
        if (category) query.category = { $regex: new RegExp(category, "i") };

        const videodata = await VideoModel.find(query).skip(skip).limit(limit);
        const total = await VideoModel.countDocuments(query);
        const totalPages = Math.ceil(total / limit);
        const isLastPage = page >= totalPages;
        res.status(200).json({
            msg: "Paginated video data",
            data: videodata,
            total,
            page,
            totalPages,
            isLastPage
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in getting data", error: error.message });
    }
})



VideoRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await VideoModel.findByIdAndDelete(id)
        res.status(201).json({ msg: "Video Deleted success...", id })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in deleting document", error: error.message });
    }
})


module.exports = { VideoRouter };