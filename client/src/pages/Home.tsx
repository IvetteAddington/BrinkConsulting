
import Header from "@/components/Header";
import TopSection from "@/components/TopSection";
import BottomSection from "@/components/BottomSection";
import NewsletterSection from "@/components/NewsletterSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <TopSection />
      <BottomSection />
      <NewsletterSection />
      <AboutSection />
    </div>
  );
}
