export class MemStorage {
    users;
    subscribers;
    currentUserId;
    currentSubscriberId;
    constructor() {
        this.users = new Map();
        this.subscribers = new Map();
        this.currentUserId = 1;
        this.currentSubscriberId = 1;
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
    }
    async createUser(insertUser) {
        const id = this.currentUserId++;
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    async createSubscriber(insertSubscriber) {
        const id = this.currentSubscriberId++;
        const subscriber = {
            ...insertSubscriber,
            id,
            createdAt: new Date()
        };
        this.subscribers.set(id, subscriber);
        return subscriber;
    }
    async getSubscriberByEmail(email) {
        return Array.from(this.subscribers.values()).find((subscriber) => subscriber.email === email);
    }
    async getAllSubscribers() {
        return Array.from(this.subscribers.values());
    }
}
export const storage = new MemStorage();
