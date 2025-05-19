const express = require("express");
const { UrlModel } = require("../Models/darkweb_video.model.js")

const Darkurl = express.Router();

Darkurl.get("/get/dark-url", async (req, res) => {
    try {
        const allUrls = await UrlModel.find(); // fetches all documents

        res.status(200).json({
            message: "Fetched all dark URLs successfully",
            data: allUrls,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch dark URLs",
            error: error.message,
        });
    }
});

Darkurl.post("/post/dark-url", async (req, res) => {
    try {
        const { embedLink, title } = req.body;
        const exisitAlready = await UrlModel.findOne({ embedLink });
        if (exisitAlready) {
            res.status(401).json({ msg: "Video already exisit" })
        } else {
            const newVideo = new UrlModel({ embedLink, title });
            await newVideo.save();
            res.status(201).json({ message: "New dark URL added successfully", data: newVideo });
        }

    } catch (error) {
        console.error(error);
        res.status(402).json({ msg: "failed to upload new url..." })
    }
})

Darkurl.delete("/dark-video/:id", async (req, res) => {
    try {
        await UrlModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Video deleted successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error deleting video..." })
    }
})


module.exports = { Darkurl }