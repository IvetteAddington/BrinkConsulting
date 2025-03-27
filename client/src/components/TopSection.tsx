import { BarChart2, Zap, Target } from "lucide-react";

export default function TopSection() {
  return (
    <section className="bg-[#E6D2CA] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-medium mb-5 text-[#3949AB]">
            CAMPAIGN OPTIMIZATION
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] leading-tight">
            Learn 10 Strategies to<br />
            Optimize Your Campaigns
          </h1>
          
          <p className="text-[#1A1A1A]/80 max-w-xl mx-auto mb-8">
            Discover proven methods to enhance your marketing campaigns, increase ROI, and 
            drive more conversions through data-driven approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="bg-[#3949AB]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart2 className="text-[#3949AB] h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-[#1A1A1A]">
              Data Analysis
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              Leverage comprehensive data analysis to uncover patterns and opportunities for your marketing campaigns that drive measurable results.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="bg-[#3949AB]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="text-[#3949AB] h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-[#1A1A1A]">
              Performance Boost
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              Optimize your existing campaigns with proven techniques that can immediately enhance performance and deliver better returns.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="bg-[#3949AB]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Target className="text-[#3949AB] h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-[#1A1A1A]">
              Targeted Strategies
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              Implement custom strategies tailored to your specific audience segments, ensuring the right message reaches the right people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
