
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section for Newsletter Page */}
        <div className="bg-gradient-to-b from-[#F0F4FF] to-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="inline-block h-1 w-12 bg-[#3949AB] mr-2"></span>
              <span className="inline-block h-1 w-5 bg-[#3949AB]/60"></span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
              Our <span className="text-gradient">Newsletter</span>
            </h1>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Join thousands of marketers receiving monthly updates on the latest trends, 
              strategies, and insights in campaign optimization.
            </p>
          </div>
        </div>

        {/* Newsletter Section Component */}
        <NewsletterSection />
        
        {/* Benefits Section */}
        <div className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center text-[#1A1A1A]">
              Benefits of Our Newsletter
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F7F9FF] p-6 rounded-xl shadow-sm border border-gray-100 hover-lift">
                <div className="h-12 w-12 bg-gradient-to-br from-[#3949AB] to-[#6979C9] rounded-lg mb-4 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Latest Trends</h3>
                <p className="text-[#1A1A1A]/70">
                  Stay updated with the latest digital marketing trends and technologies.
                </p>
              </div>
              
              <div className="bg-[#F7F9FF] p-6 rounded-xl shadow-sm border border-gray-100 hover-lift">
                <div className="h-12 w-12 bg-gradient-to-br from-[#3949AB] to-[#6979C9] rounded-lg mb-4 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Actionable Tips</h3>
                <p className="text-[#1A1A1A]/70">
                  Get practical advice you can implement right away to improve your campaigns.
                </p>
              </div>
              
              <div className="bg-[#F7F9FF] p-6 rounded-xl shadow-sm border border-gray-100 hover-lift">
                <div className="h-12 w-12 bg-gradient-to-br from-[#3949AB] to-[#6979C9] rounded-lg mb-4 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Case Studies</h3>
                <p className="text-[#1A1A1A]/70">
                  Learn from real success stories and understand what works in your industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
