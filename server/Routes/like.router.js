const express = require("express");
const { PostMediaModel } = require("../Models/post.uploads.model.js");
const authenticate = require("../Middlewares/auth.middleware.js");
const { ReelsMediaModel } = require("../Models/reels.media,model.js");
const LikeRouter = express.Router();



//  Post like Routes here....
LikeRouter.patch("/post/like/:id", authenticate, async (req, res) => {
    try {
        const post = await PostMediaModel.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "Post not found" });

        if (post.likedBy.includes(req.userId)) {
            return res.status(400).json({ msg: "You already liked this post" });
        }

        post.likedBy.push(req.userId);
        post.likes = post.likedBy.length;
        await post.save();

        return res.status(200).json({ msg: "Post liked", totalLikes: post.likes, likedBy: post.likedBy });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong", error: err.message });
    }
});

LikeRouter.patch("/post/unlike/:id", authenticate, async (req, res) => {
    try {
        const post = await PostMediaModel.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "Post not found" });

        if (!post.likedBy.includes(req.userId)) {
            return res.status(400).json({ msg: "You have not liked this post" });
        }

        post.likedBy = post.likedBy.filter((userId) => userId.toString() !== req.userId);
        post.likes = post.likedBy.length;
        await post.save();

        return res.status(200).json({ msg: "Post unliked", totalLikes: post.likes, likedBy: post.likedBy });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong", error: err.message });
    }
});

// Reels Like / Unlike Routeshere....
LikeRouter.patch("/reel/like/:id", authenticate, async (req, res) => {
    try {
        const post = await ReelsMediaModel.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "Post not found" });

        if (post.likedBy.includes(req.userId)) {
            return res.status(400).json({ msg: "You already liked this post" });
        }

        post.likedBy.push(req.userId);
        post.likes = post.likedBy.length;
        await post.save();

        return res.status(200).json({ msg: "Post liked", totalLikes: post.likes, likedBy: post.likedBy });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong", error: err.message });
    }
});

LikeRouter.patch("/reel/unlike/:id", authenticate, async (req, res) => {
    try {
        const post = await ReelsMediaModel.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "Post not found" });

        if (!post.likedBy.includes(req.userId)) {
            return res.status(400).json({ msg: "You have not liked this post" });
        }

        post.likedBy = post.likedBy.filter((userId) => userId.toString() !== req.userId);
        post.likes = post.likedBy.length;
        await post.save();

        return res.status(200).json({ msg: "Post unliked", totalLikes: post.likes, likedBy: post.likedBy });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong", error: err.message });
    }
});

module.exports = { LikeRouter }