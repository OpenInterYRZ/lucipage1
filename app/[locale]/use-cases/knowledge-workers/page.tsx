import KnowledgeWorkersHero from "@/components/usecase/knowledge-workers/KnowledgeWorkersHero";
import PainPoints from "@/components/usecase/knowledge-workers/PainPoints";
import SceneSmartDigest from "@/components/usecase/knowledge-workers/SceneSmartDigest";
import SceneResearchAssistant from "@/components/usecase/knowledge-workers/SceneResearchAssistant";
import SceneKnowledgeBase from "@/components/usecase/knowledge-workers/SceneKnowledgeBase";
import SceneInsightConnections from "@/components/usecase/knowledge-workers/SceneInsightConnections";
import BeforeAfter from "@/components/usecase/knowledge-workers/BeforeAfter";
import DataHighlights from "@/components/usecase/knowledge-workers/DataHighlights";
import SceneGallery from "@/components/usecase/knowledge-workers/SceneGallery";
import Testimonial from "@/components/usecase/knowledge-workers/Testimonial";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function KnowledgeWorkersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <KnowledgeWorkersHero />
      <PainPoints />
      <SceneSmartDigest />
      <SceneResearchAssistant />
      <SceneKnowledgeBase />
      <SceneInsightConnections />
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
