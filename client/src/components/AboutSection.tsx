import { Users, Trophy, CreditCard } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
            About Our Approach
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-xl mx-auto">
            Our data-driven methodology helps businesses of all sizes improve their 
            marketing performance through carefully optimized campaigns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-[#1A1A1A]">
              Why Choose Us?
            </h3>
            <p className="text-[#1A1A1A]/70 mb-6">
              With over 15 years of experience in digital marketing and campaign optimization, 
              our team of experts has helped hundreds of businesses achieve their goals through 
              data-backed strategies.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-[#3949AB]/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  <Users className="text-[#3949AB] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A]">Expert Team</h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    Our specialists have backgrounds in marketing, data science, and conversion optimization.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-[#3949AB]/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  <Trophy className="text-[#3949AB] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A]">Proven Results</h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    We've helped clients increase their conversion rates by an average of 37%.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-[#3949AB]/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  <CreditCard className="text-[#3949AB] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A]">ROI Focused</h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    Our strategies are designed to maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#F5F7FF] p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold mb-6 text-[#1A1A1A]">
              Our Process
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#3949AB]"></div>
                <h4 className="font-medium text-[#1A1A1A] mb-1">1. Comprehensive Audit</h4>
                <p className="text-sm text-[#1A1A1A]/70">
                  We analyze your current campaigns to identify strengths, weaknesses, and opportunities.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#3949AB]"></div>
                <h4 className="font-medium text-[#1A1A1A] mb-1">2. Strategic Planning</h4>
                <p className="text-sm text-[#1A1A1A]/70">
                  Our team develops a tailored optimization strategy based on your goals and audience.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#3949AB]/30">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#3949AB]"></div>
                <h4 className="font-medium text-[#1A1A1A] mb-1">3. Implementation</h4>
                <p className="text-sm text-[#1A1A1A]/70">
                  We execute the strategy with continuous A/B testing and performance monitoring.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#3949AB]"></div>
                <h4 className="font-medium text-[#1A1A1A] mb-1">4. Analysis & Refinement</h4>
                <p className="text-sm text-[#1A1A1A]/70">
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