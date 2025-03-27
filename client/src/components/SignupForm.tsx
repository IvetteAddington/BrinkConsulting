import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Extend the schema with validation
const formSchema = insertSubscriberSchema.extend({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function SignupForm() {
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
        description: "Thank you for signing up!",
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
    <div className="bg-white text-[#1A1A1A] rounded shadow-md p-8">
      <h2 className="font-serif text-3xl font-medium mb-2">Sign up</h2>
      <h3 className="font-serif text-3xl font-medium mb-8">Today</h3>
      
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type="email" 
            placeholder="Email Address" 
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded focus:ring-1 focus:ring-[#3949AB] text-sm`}
            {...register("email")}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-[#E6D2CA] text-[#1A1A1A] uppercase text-sm tracking-wider font-medium transition-colors duration-200 hover:bg-[#D4BFB8]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Sign up today"}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
