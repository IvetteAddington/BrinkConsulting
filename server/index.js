import express from "express";
import http from "http"; // ✅ Needed for creating the HTTP server
import nodemailer from "nodemailer";
import { registerRoutes } from "./routes/index.js";
import { setupVite, serveStatic, log } from "./vite.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse = undefined;
    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };
    res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
            let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }
            if (logLine.length > 80) {
                logLine = logLine.slice(0, 79) + "…";
            }
            log(logLine);
        }
    });
    next();
});
// Email sending route
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "your-email@gmail.com", // Replace with your Gmail address
            pass: "your-password", // Replace with your Gmail password or app-specific password
        },
    });
    const mailOptions = {
        from: email,
        to: "info@brinkaiconsulting.com",
        subject: `New Contact Form Submission from ${name}`,
        text: message,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Your message has been sent successfully." });
    }
    catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "An error occurred while sending your message." });
    }
});
// Register routes and start server
(async () => {
    await registerRoutes(app); // ✅ Register routes first
    const server = http.createServer(app); // ✅ Create http.Server instance
    app.use((err, _req, res, _next) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
        throw err;
    });
    if (app.get("env") === "development") {
        await setupVite(app, server); // ✅ Now server is the correct type
    }
    else {
        serveStatic(app);
    }
    const port = 5000;
    const host = "127.0.0.1";
    server.listen(port, host, () => {
        log(`✅ Server running at http://${host}:${port}`);
    });
})();
