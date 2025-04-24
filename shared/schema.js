import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});
// Email subscribers schema
export const subscribers = pgTable("subscribers", {
    id: serial("id").primaryKey(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull()
});
export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
    email: true,
});
