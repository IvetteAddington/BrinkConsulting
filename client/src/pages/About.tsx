
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section for About Page */}
        <div className="bg-gradient-to-b from-[#F0F4FF] to-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="inline-block h-1 w-12 bg-[#3949AB] mr-2"></span>
              <span className="inline-block h-1 w-5 bg-[#3949AB]/60"></span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
              About <span className="text-gradient">Our Company</span>
            </h1>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              We are dedicated to helping businesses achieve their marketing goals through 
              data-driven campaign optimization and strategic insights.
            </p>
          </div>
        </div>

        {/* About Section Component */}
        <AboutSection />
        
        {/* Call to Action */}
        <div className="py-16 px-6 bg-[#F5F7FF]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-[#1A1A1A]">
              Ready to Optimize Your Campaigns?
            </h2>
            <p className="text-[#1A1A1A]/70 mb-8 max-w-xl mx-auto">
              Join hundreds of businesses that have improved their marketing results with our 
              proven strategies and expert guidance.
            </p>
            <a 
              href="/newsletter" 
              className="inline-block py-3 px-8 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
