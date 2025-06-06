const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config()
const { UserModel } = require("../Models/user.model.js")
const UserRouter = express.Router();

UserRouter.get("/get", async (req, res) => {
    try {
        const user = await UserModel.find().select("-password -phone");
        res.status(200).json({ msg: "users list here......", data: user })
    } catch (error) {
        res.status(400).json({ msg: "error in getting users data..." })
    }
})

UserRouter.get("/get/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "users data here......", data: user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Error in getting user's data..." });
    }
});
UserRouter.post("/regester", async (req, res) => {
    const { phone, email, name, password } = req.body;
    const existUser = await UserModel.findOne({ email: email });
    // Checking for user if user already exist...
    if (existUser) {
        res.status(400).json({ msg: "User Already Exist....in data base" })
    } else {
        try {
            // Hash the password
            const hash = await bcrypt.hash(password, 5);
            // Create a new user with the hashed password
            const new_user = new UserModel({ phone: phone, email: email, name: name, password: hash });
            await new_user.save();
            res.status(200).json({ msg: "New User Created", user: new_user })

        } catch (error) {
            res.status(500).json({ msg: "Failed to add new user", error: error.message });
        }
    }
})

UserRouter.post("/verify", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Finding the user by email...
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        // Comparing the password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        // Creating a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            msg: "Login successful",
            token: token,
            user: {
                userId: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Login failed", error: error.message });
    }

})

UserRouter.delete("/:id", async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error deleting user..." })
    }
})


UserRouter.patch("/block/:id", async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, { isBlocked: true });
        res.status(200).json({ msg: "User blocked successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error blocking user" });
    }
});

UserRouter.patch("/edit/:id", async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true,
            });
        if (!updatedUser) {
            return res.status(403).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "User updated successfully", data: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Failed to update user", error: error.message });
    }
})



module.exports = { UserRouter }