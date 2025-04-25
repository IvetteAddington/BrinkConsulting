import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

// Optional: Could be fetched from a CMS or file in the future
const archivedNewsletters = [
   {
     title: "How I Used AI to Build My Website in 15 Minutes (and Saved $5K)",
     date: "April 11, 2024",
     link: "https://substack.com/home/post/p-160286159?source=queue",
   },
  // {
  //   title: "Productivity Myths AI Can Fix",
  //   date: "February 2024",
  //   link: "/newsletter/february-2024",
  // },
  // {
  //   title: "Your First AI Workflow",
  //   date: "January 2024",
  //   link: "/newsletter/january-2024",
  // },
];

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#F0F4FF] to-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="inline-block h-1 w-12 bg-[#3949AB] mr-2"></span>
              <span className="inline-block h-1 w-5 bg-[#3949AB]/60"></span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
              Newsletter <span className="text-gradient">Archive</span>
            </h1>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              No buzzwords. Just clear, useful updates on how AI can help your business run better, 
              faster, and smarter.
            </p>
          </div>
        </div>

        {/* Archive List */}
        <div className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold mb-6 text-[#1A1A1A] text-center">
              Browse Past Issues
            </h2>
            <ul className="space-y-6">
              {archivedNewsletters.map((issue, idx) => (
                <li key={idx} className="border border-gray-100 p-6 rounded-xl hover:shadow transition-all">
                  <a target="_blank" href={issue.link} className="text-[#3949AB] font-semibold text-lg hover:underline">
                    {issue.title}
                  </a>
                  <p className="text-sm text-[#1A1A1A]/60 mt-1">{issue.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Benefits Section (Hidden) */}
        {false && (
          <div className="py-16 px-6 bg-white">
            {/* ...existing hidden benefits code */}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
