
import { Input } from "./ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">Stay updated with our latest content and updates.</p>
        <div className="max-w-md mx-auto flex gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
