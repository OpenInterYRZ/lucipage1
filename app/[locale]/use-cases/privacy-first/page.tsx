import PrivacyFirstHero from "@/components/usecase/privacy-first/PrivacyFirstHero";
import PainPoints from "@/components/usecase/privacy-first/PainPoints";
import ScenePrivateVM from "@/components/usecase/privacy-first/ScenePrivateVM";
import SceneDataControl from "@/components/usecase/privacy-first/SceneDataControl";
import SceneCompliance from "@/components/usecase/privacy-first/SceneCompliance";
import SecurityArchitecture from "@/components/usecase/privacy-first/SecurityArchitecture";
import BeforeAfter from "@/components/usecase/privacy-first/BeforeAfter";
import DataHighlights from "@/components/usecase/privacy-first/DataHighlights";
import SceneGallery from "@/components/usecase/privacy-first/SceneGallery";
import Testimonial from "@/components/usecase/privacy-first/Testimonial";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function PrivacyFirstUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <PrivacyFirstHero />
      <PainPoints />
      <ScenePrivateVM />
      <SceneDataControl />
      <SceneCompliance />
      <SecurityArchitecture />
      <BeforeAfter />
      <DataHighlights />
      <SceneGallery />
      <Testimonial />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
