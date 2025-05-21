const express = require("express");
const { PodAudioModel } = require("../Models/podcast.audio.model.js");
const PodcastRouter = express.Router();



PodcastRouter.get("/get/podcast/urls", async (req, res) => {
    try {
        const url = await PodAudioModel.find();
        res.status(200).json({ msg: "your data is here", data: url })
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

module.exports = { PodcastRouter };