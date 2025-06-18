const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();
const sendWelcomeEmail = async (to, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const templatePath = path.join(__dirname, "../Templates/welcome.ejs");
        const html = await ejs.renderFile(templatePath, { name, email: to });

        const mailOptions = {
            from: `"Dare to visit 👨‍💻" <${process.env.SMTP_EMAIL}>`,
            to,
            subject: "Welcome to our website!",
            html
        };

        await transporter.sendMail(mailOptions);
        // console.log("✅ Welcome email sent to:", to);
        return true;

    } catch (error) {
        console.error("❌ Failed to send email:", error.message);
        return false;
    }
};

module.exports = { sendWelcomeEmail };






