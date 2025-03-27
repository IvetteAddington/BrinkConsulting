
import Header from "@/components/Header";
import TopSection from "@/components/TopSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TopSection />
        <div className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F9FF] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]">
              Explore More <span className="text-[#3949AB]">About Us</span>
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-xl mx-auto text-lg mb-8">
              Learn about our approach to campaign optimization and how we can help your business achieve better results.
            </p>
            <a 
              href="/about" 
              className="inline-block py-3 px-8 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="py-20 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]">
              Stay <span className="text-[#3949AB]">Updated</span>
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-xl mx-auto text-lg mb-8">
              Subscribe to our newsletter to receive the latest insights and strategies in campaign optimization.
            </p>
            <a 
              href="/newsletter" 
              className="inline-block py-3 px-8 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
