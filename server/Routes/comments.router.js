const express = require("express");
const { PostMediaModel } = require("../Models/post.uploads.model");
const { ReelsMediaModel } = require("../Models/reels.media,model");
const mongoose = require("mongoose");

const CommentsRouter = express.Router();

CommentsRouter.post("/comment/:postId", async (req, res) => {
    const { postId } = req.params;
    const { userId, comment } = req.body;

    try {
        const post = await ReelsMediaModel.findById(postId);
        if (!post) return res.status(404).json({ message: "Post not found" });
        if (post.comments.length >= 15) {
            return res.status(208).json({
                message: "Comment limit reached for this post"
            });
        }
        const newComment = {
            user: new mongoose.Types.ObjectId(userId),
            comment,
        };

        post.comments.push(newComment);
        await post.save();

        res.status(200).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

CommentsRouter.get("/comment/:postId", async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await ReelsMediaModel.findById(postId)
            .populate("comments.user", "name profile_picture")
        // .populate("uploadedBy", "name profile_picture");

        if (!post) return res.status(404).json({ message: "Post not found" });

        const formattedComments = post.comments.map((commentObj) => ({
            commentId: commentObj._id,
            comment: commentObj.comment,
            createdAt: commentObj.createdAt,
            user: commentObj.user
                ? {
                    name: commentObj.user.name,
                    profile_picture: commentObj.user.profile_picture,
                    userId: commentObj.user._id
                }
                : null
        }));

        res.status(200).json({
            comments: formattedComments,
            uploadedBy: post.uploadedBy
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch comments", error: error.message });
    }
});





module.exports = { CommentsRouter }


