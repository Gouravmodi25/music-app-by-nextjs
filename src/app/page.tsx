import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
    </main>
  );
}
