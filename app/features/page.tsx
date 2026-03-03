import BentoFeatures from "@/components/bento/bento";
import KeyFeaturesBento from "@/components/bento/KeyFeaturesBento";
import AccordionFeatures from "@/components/features/AccordionFeatures";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="w-full h-full mx-auto">
      <div className="pt-24" />
      <BentoFeatures />
      <KeyFeaturesBento />
      <AccordionFeatures />
      <Footer />
    </div>
  );
}
