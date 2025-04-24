import { createServer } from "http";
import { storage } from "./storage.js";
import { insertSubscriberSchema } from "../shared/schema.js";
import { fromZodError } from "zod-validation-error";
export async function registerRoutes(app) {
    // put application routes here
    // prefix all routes with /api
    // Subscribe endpoint
    app.post("/api/subscribe", async (req, res) => {
        try {
            // Validate the request body
            const result = insertSubscriberSchema.safeParse(req.body);
            if (!result.success) {
                const validationError = fromZodError(result.error);
                return res.status(400).json({
                    success: false,
                    message: validationError.message
                });
            }
            const { email } = result.data;
            // Check if subscriber with this email already exists
            const existingSubscriber = await storage.getSubscriberByEmail(email);
            if (existingSubscriber) {
                return res.status(409).json({
                    success: false,
                    message: "This email is already subscribed"
                });
            }
            // Create new subscriber
            const subscriber = await storage.createSubscriber({ email });
            return res.status(201).json({
                success: true,
                message: "Successfully subscribed",
                data: subscriber
            });
        }
        catch (error) {
            console.error("Error in subscribe endpoint:", error);
            return res.status(500).json({
                success: false,
                message: "An error occurred while processing your request"
            });
        }
    });
    // Get all subscribers (admin endpoint)
    app.get("/api/subscribers", async (_req, res) => {
        try {
            const subscribers = await storage.getAllSubscribers();
            return res.status(200).json({
                success: true,
                data: subscribers
            });
        }
        catch (error) {
            console.error("Error fetching subscribers:", error);
            return res.status(500).json({
                success: false,
                message: "An error occurred while fetching subscribers"
            });
        }
    });
    const httpServer = createServer(app);
    return httpServer;
}
