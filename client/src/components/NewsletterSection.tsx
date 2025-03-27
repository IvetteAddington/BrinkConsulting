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
    <section id="newsletter" className="py-20 px-6 bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#3949AB]/5 rounded-full transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3949AB]/5 rounded-full -mb-40 -mr-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-4 rounded-full mb-8 shadow-lg">
          <MailCheck size={28} className="text-white" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]">
          Subscribe to Our <span className="text-[#3949AB]">Newsletter</span>
        </h2>
        
        <p className="text-[#1A1A1A]/70 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Stay updated with the latest trends and strategies in campaign optimization. 
          Our newsletter is sent weekly and includes exclusive insights and case studies.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="bg-white p-3 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3949AB] text-base shadow-inner bg-gray-50`}
                  {...register("email")}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 text-left pl-2">{errors.email.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="py-4 px-8 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium text-base rounded-lg hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </div>
          
          <p className="text-[#1A1A1A]/50 mt-4 flex items-center justify-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#3949AB]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}