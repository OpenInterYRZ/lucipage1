import CreatorsThinkersHero from "@/components/usecase/creators-thinkers/CreatorsThinkersHero";
import PainPoints from "@/components/usecase/creators-thinkers/PainPoints";
import SceneIdeaCapture from "@/components/usecase/creators-thinkers/SceneIdeaCapture";
import SceneSecondBrain from "@/components/usecase/creators-thinkers/SceneSecondBrain";
import SceneCreativeWorkflow from "@/components/usecase/creators-thinkers/SceneCreativeWorkflow";
import BeforeAfter from "@/components/usecase/creators-thinkers/BeforeAfter";
import DataHighlights from "@/components/usecase/creators-thinkers/DataHighlights";
import SceneGallery from "@/components/usecase/creators-thinkers/SceneGallery";
import Testimonial from "@/components/usecase/creators-thinkers/Testimonial";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function CreatorsThinkersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <CreatorsThinkersHero />
      <PainPoints />
      <SceneIdeaCapture />
      <SceneSecondBrain />
      <SceneCreativeWorkflow />
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
