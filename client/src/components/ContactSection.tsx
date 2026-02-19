import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Please tell me a bit more (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgwlpno";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      } else {
        const json = await res.json();
        setServerError(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#3949AB]/10 px-4 py-2 rounded-full mb-5">
            <p className="uppercase tracking-widest text-sm font-medium text-[#3949AB]">
              Get in Touch
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Let's Talk About{" "}
            <span className="bg-gradient-to-r from-[#3949AB] to-[#6979C9] bg-clip-text text-transparent">
              Your Marketing
            </span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg">
            Book a free strategy session and find out exactly where AI can take your marketing further.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#3949AB]/5 border border-[#3949AB]/20 rounded-xl p-10 text-center">
            <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <CheckCircle className="text-white h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Message received!</h3>
            <p className="text-[#1A1A1A]/70">I'll get back to you within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className={`w-full p-3 border ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3949AB]/30 focus:border-[#3949AB] text-sm transition-colors`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3949AB]/30 focus:border-[#3949AB] text-sm transition-colors`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                Company{" "}
                <span className="text-[#1A1A1A]/40 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Acme Inc."
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3949AB]/30 focus:border-[#3949AB] text-sm transition-colors"
                {...register("company")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                What are you hoping AI can help with?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="e.g. I spend hours writing emails and social posts each week and want to find a smarter way to do it..."
                className={`w-full p-3 border ${
                  errors.message ? "border-red-400" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3949AB]/30 focus:border-[#3949AB] text-sm transition-colors resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {serverError && (
              <p className="text-red-500 text-sm text-center">{serverError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium rounded-lg hover:shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Book My Free Strategy Session"}
            </button>

            <p className="text-xs text-[#1A1A1A]/50 text-center">
              I'll get back to you within 2 business days. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
