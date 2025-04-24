import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "info@brinkaiconsulting.com",
            subject: `New Inquiry from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
        });
        res.status(200).json({ success: true, message: "Message sent!" });
    }
    catch (err) {
        console.error("Email error:", err);
        res.status(500).json({ success: false, message: "Server error. Try again later." });
    }
});
export default router;
