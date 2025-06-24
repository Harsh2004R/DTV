const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const authenticate = require("../Middlewares/auth.middleware.js");
require("dotenv").config()
const { UserModel } = require("../Models/user.model.js")
const { sendWelcomeEmail } = require("../Config/sendEmail.js")
const UserRouter = express.Router();

UserRouter.get("/get", async (req, res) => { // this route will provide all user's data...
    try {
        const user = await UserModel.find().select("-password -phone");
        res.status(200).json({ msg: "users list here......", data: user })
    } catch (error) {
        res.status(400).json({ msg: "error in getting users data..." })
    }
})

UserRouter.get("/get/:id", authenticate, async (req, res) => { // this route will provide user's data via id(68444ae164bd8ae88c733a30)..
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
    const existUser = await UserModel.findOne({ $or: [{ email }, { phone }] });

    if (existUser) {
        return res.status(400).json({ msg: `${email} or ${phone} User Already Exists` });
    }

    try {
        const hash = await bcrypt.hash(password, 5);

        // Send email first
        const emailSent = await sendWelcomeEmail(email, name);

        if (!emailSent) {
            return res.status(500).json({ msg: "Email failed. User not created." });
        }

        // Save user only if email is successful
        const new_user = new UserModel({ phone, email, name, password: hash });
        await new_user.save();

        res.status(200).json({ msg: "New User Created", user: new_user });

    } catch (error) {
        res.status(500).json({ msg: "Registration Failed", error: error.message });
    }
});


UserRouter.post("/verify", async (req, res) => { // thsi route will verify / login user ...
    const { email, password } = req.body;
    try {
        // Finding the user by email...
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        if (user.isBlocked) {
            return res.status(403).json({ msg: "This account has been blocked by the admin." });
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

UserRouter.delete("/:id", async (req, res) => { // this route will delet user from database using id(68444ae164bd8ae88c733a30)...
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error deleting user..." })
    }
})


UserRouter.patch("/block/:id", async (req, res) => { // this route will block user using their user id(68444ae164bd8ae88c733a30)...
    try {
        await UserModel.findByIdAndUpdate(req.params.id, { isBlocked: true });
        res.status(200).json({ msg: "User blocked successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error blocking user" });
    }
});

UserRouter.patch("/unblock/:id", async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, { isBlocked: false });
        res.status(200).json({ msg: "User unblocked successfully" });
    } catch (error) {
        res.status(400).json({ msg: "Error unblocking user" });
    }
});



UserRouter.patch("/edit", authenticate, async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.userId, req.body,
            // use userId from the token (set by middleware)
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(403).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User updated successfully", data: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Failed to update user", error: error.message });
    }
});



UserRouter.get("/profile", authenticate, async (req, res) => { //this route will return userdata only to logged in user(secure)...
    try {
        const user = await UserModel.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "User data retrieved", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error retrieving user's data" });
    }
});



// Express Route - Verify Token (MUST be added)

UserRouter.get("/verify-token", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ valid: false });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, user: decoded });
    } catch (err) {
        res.status(401).json({ valid: false });
    }
});



module.exports = { UserRouter }