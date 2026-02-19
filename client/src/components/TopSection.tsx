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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1A1A] leading-tight">
            AI is changing work.
            <br />
            <span className="bg-gradient-to-r from-[#3949AB] to-[#6979C9] bg-clip-text text-transparent">
              Let's get it working for you.
            </span>
          </h1>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block py-3.5 px-8 bg-gradient-to-r from-[#3949AB] to-[#6979C9] text-white font-medium rounded-lg hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Book a Free Strategy Session
            </a>
            <a
              href="#services"
              className="inline-block py-3.5 px-8 border border-[#3949AB] text-[#3949AB] font-medium rounded-lg hover:bg-[#3949AB]/5 transition-all duration-300"
            >
              See What We Do ↓
            </a>
          </div>
        </div>

        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3">
              Multiply Your Content Reach
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              Your ideas shouldn't live in one place. AI tools take a single piece of content and extend it across email, social, and more — same voice, less repetitive work, far greater reach.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3">
              Stay Visible in AI Search
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              Buyers are using LLMs to make decisions. Keep your content and data current so your brand shows up in traditional search and in AI-generated answers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3">
              Lead With Customer Sentiment
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              AI continuously monitors what your customers are saying, searching, and responding to, surfacing real-time trends, so your campaigns reflect what the market actually cares about right now, not last quarter.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3">
              Never Miss the Follow-Up
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              Most leads don't convert on first contact. AI-powered sequences keep your brand in front of the right people at the right time, nurturing relationships even when you're not in the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
