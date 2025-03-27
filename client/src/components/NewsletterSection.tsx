import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MailCheck } from "lucide-react";

// Extend the schema with validation
const formSchema = insertSubscriberSchema.extend({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function NewsletterSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const subscribeMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    subscribeMutation.mutate(data);
  };

  return (
    <section id="newsletter" className="py-16 px-6 bg-[#F5F7FF]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#3949AB]/10 p-3 rounded-full mb-6">
          <MailCheck size={28} className="text-[#3949AB]" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
          Subscribe to Our Newsletter
        </h2>
        
        <p className="text-[#1A1A1A]/70 max-w-xl mx-auto mb-8">
          Stay updated with the latest trends and strategies in campaign optimization. 
          Our newsletter is sent weekly and includes exclusive insights and case studies.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md focus:ring-1 focus:ring-[#3949AB] text-sm`}
                {...register("email")}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>
              )}
            </div>
            
            <button 
              type="submit" 
              className="py-3 px-6 bg-[#3949AB] text-white font-medium text-sm rounded-md hover:bg-[#2C3A8C] transition-colors duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          
          <p className="text-xs text-[#1A1A1A]/50 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}