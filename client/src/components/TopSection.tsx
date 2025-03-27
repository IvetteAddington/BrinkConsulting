import { BarChart2, Zap, Target } from "lucide-react";

export default function TopSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#E6D2CA] to-[#F0E4DF] py-20 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3949AB]/5 rounded-full -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3949AB]/5 rounded-full -mb-20 -ml-20"></div>
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#3949AB]/20 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-[#3949AB]/20 rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3949AB]/10 px-4 py-2 rounded-full mb-5">
            <p className="uppercase tracking-widest text-sm font-medium text-[#3949AB]">
              CAMPAIGN OPTIMIZATION
            </p>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A] leading-tight">
            Elevate Your Marketing<br />
            <span className="bg-gradient-to-r from-[#3949AB] to-[#6979C9] bg-clip-text text-transparent">With Campaign Optimization</span>
          </h1>
          
          <p className="text-[#1A1A1A]/80 max-w-xl mx-auto mb-10 text-lg">
            Discover proven methods to enhance your marketing campaigns, increase ROI, and 
            drive more conversions through data-driven approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
              <BarChart2 className="text-white h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-[#1A1A1A]">
              Data Analysis
            </h3>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Leverage comprehensive data analysis to uncover patterns and opportunities for your marketing campaigns that drive measurable results.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
              <Zap className="text-white h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-[#1A1A1A]">
              Performance Boost
            </h3>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Optimize your existing campaigns with proven techniques that can immediately enhance performance and deliver better returns.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
              <Target className="text-white h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-[#1A1A1A]">
              Targeted Strategies
            </h3>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Implement custom strategies tailored to your specific audience segments, ensuring the right message reaches the right people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
