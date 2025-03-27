import { Users, Trophy, CreditCard } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F9FF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block h-1 w-12 bg-[#3949AB] mr-2"></span>
            <span className="inline-block h-1 w-5 bg-[#3949AB]/60"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]">
            About Our <span className="text-[#3949AB]">Approach</span>
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-xl mx-auto text-lg">
            Our data-driven methodology helps businesses of all sizes improve their 
            marketing performance through carefully optimized campaigns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-serif text-2xl font-bold mb-5 text-[#1A1A1A] flex items-center">
              <span className="bg-gradient-to-r from-[#3949AB] to-[#6979C9] h-8 w-2 mr-3 rounded-full"></span>
              Why Choose Us?
            </h3>
            <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
              With over 15 years of experience in digital marketing and campaign optimization, 
              our team of experts has helped hundreds of businesses achieve their goals through 
              data-backed strategies.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5 group hover:bg-[#F7F9FF] p-3 rounded-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0 shadow-md">
                  <Users className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Expert Team</h4>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    Our specialists have backgrounds in marketing, data science, and conversion optimization.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 group hover:bg-[#F7F9FF] p-3 rounded-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0 shadow-md">
                  <Trophy className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Proven Results</h4>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    We've helped clients increase their conversion rates by an average of 37%.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 group hover:bg-[#F7F9FF] p-3 rounded-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-[#3949AB] to-[#6979C9] p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0 shadow-md">
                  <CreditCard className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">ROI Focused</h4>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    Our strategies are designed to maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3949AB]/5 rounded-full -mt-10 -mr-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3949AB]/5 rounded-full -mb-10 -ml-10"></div>
            
            <h3 className="font-serif text-2xl font-bold mb-6 text-[#1A1A1A] flex items-center relative z-10">
              <span className="bg-gradient-to-r from-[#3949AB] to-[#6979C9] h-8 w-2 mr-3 rounded-full"></span>
              Our Process
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="relative pl-10 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-13px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-[#3949AB] to-[#6979C9] flex items-center justify-center text-xs text-white font-bold shadow-md">1</div>
                <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Comprehensive Audit</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  We analyze your current campaigns to identify strengths, weaknesses, and opportunities.
                </p>
              </div>
              
              <div className="relative pl-10 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-13px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-[#3949AB] to-[#6979C9] flex items-center justify-center text-xs text-white font-bold shadow-md">2</div>
                <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Strategic Planning</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  Our team develops a tailored optimization strategy based on your goals and audience.
                </p>
              </div>
              
              <div className="relative pl-10 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-13px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-[#3949AB] to-[#6979C9] flex items-center justify-center text-xs text-white font-bold shadow-md">3</div>
                <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Implementation</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  We execute the strategy with continuous A/B testing and performance monitoring.
                </p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-[-13px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-[#3949AB] to-[#6979C9] flex items-center justify-center text-xs text-white font-bold shadow-md">4</div>
                <h4 className="font-medium text-[#1A1A1A] text-lg mb-2">Analysis & Refinement</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  Regular reporting and analysis ensure ongoing optimization and improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}