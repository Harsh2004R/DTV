const express = require("express");
const requireAdmin = require("../Middlewares/admin.auth.middleware");
const AdminRouter = express.Router();

AdminRouter.get("/dashboard", requireAdmin, (req, res) => {
    res.send("Welcome to the Admin Dashboard!");
});

module.exports = { AdminRouter };
