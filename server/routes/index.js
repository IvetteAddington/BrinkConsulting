import contactRoutes from "./contact.js";
export async function registerRoutes(app) {
    app.use("/api", contactRoutes); // this gives you POST /api/contact
    return app;
}
