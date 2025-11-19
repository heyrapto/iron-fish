import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { BlogSection } from "./components/sections/blogs";
import { CTASection } from "./components/sections/cta";
import { FeaturesSection } from "./components/sections/features";
import { HeroSection } from "./components/sections/hero";
import { NewsSection } from "./components/sections/news";
import { OverviewSection } from "./components/sections/overview";
import { WhychooseUsSection } from "./components/sections/whychooseus";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewsSection />
      <FeaturesSection />
      <OverviewSection />
      <WhychooseUsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}