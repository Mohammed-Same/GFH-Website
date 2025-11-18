import HeroSection from "../components/HeroSection";
import QuickFeatures from "../components/QuickFeatures";
import FeaturesSection from "../components/FeaturesSection";
import StoreLocationSection from "../components/StoreLocationSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import HomeContactSection from "../components/HomeContactSection";
import CallToActionSection from "../components/CallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <StoreLocationSection />
      <TestimonialsSection />
      <HomeContactSection />
    </div>
  );
}
