const express = require("express");
const { PodAudioModel } = require("../Models/podcast.audio.model.js");
const requireAdmin = require("../Middlewares/admin.auth.middleware.js");
const authenticate = require("../Middlewares/auth.middleware.js");
const PodcastRouter = express.Router();


// This Routes is for users...
PodcastRouter.get("/get/podcast/urls", authenticate, async (req, res) => {

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * limit;
        const query = {};
        const PodData = await PodAudioModel.find(query).skip(skip).limit(limit);
        const total = await PodAudioModel.countDocuments(query);
        const totalPages = Math.ceil(total / limit);
        const isLastPage = page >= totalPages;
        res.status(200).json({
            msg: "Paginated Podcast data",
            data: PodData,
            total,
            page,
            totalPages,
            isLastPage
        });
    } catch (error) {
        res.status(401).json({ msg: "error in getting podcast urls from server....", error: error.message })
    }
})

PodcastRouter.post("/post/podcast/url", async (req, res) => {
    const { url, title } = req.body;
    const alreadyExist = await PodAudioModel.findOne({ url: url })
    if (alreadyExist) {
        res.status(400).json({ msg: "url Already Exist....in data base" })
    } else {
        try {
            const AddedUrl = new PodAudioModel({ url: url, title: title });
            await AddedUrl.save();
            res.status(200).json({ msg: "New Url Added to database", data: AddedUrl });
        } catch (error) {
            res.status(402).json({ msg: "error in posting podcast urls on server", error: error.message })
        }
    }

})

PodcastRouter.delete("/delete/podcast/:id", async (req, res) => {
    try {
        await PodAudioModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "podcast deleted successfully" });
    } catch (error) {
        res.status(402).json({ msg: "error in deleting podcast urls from server", error: error.message })
    }
})


PodcastRouter.get("/get/podcast/urls/all", async (req, res) => {

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const skip = (page - 1) * limit;
        const query = {};
        const PodData = await PodAudioModel.find(query).skip(skip).limit(limit);
        const total = await PodAudioModel.countDocuments(query);
        const totalPages = Math.ceil(total / limit);
        const isLastPage = page >= totalPages;
        res.status(200).json({
            msg: "Paginated Podcast data",
            data: PodData,
            total,
            page,
            totalPages,
            isLastPage
        });
    } catch (error) {
        res.status(401).json({ msg: "error in getting podcast urls from server....", error: error.message })
    }
})





module.exports = { PodcastRouter };