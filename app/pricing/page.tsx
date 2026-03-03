import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="w-full h-full mx-auto">
      <Navbar />
      <div className="pt-24" />
      <PricingSection />
      <Footer />
    </div>
  );
}
