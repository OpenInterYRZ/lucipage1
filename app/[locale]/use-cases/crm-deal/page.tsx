import CrmDealHero from "@/components/usecase/crm-deal/CrmDealHero";
import SceneAnalyse from "@/components/usecase/crm-deal/SceneAnalyse";
import SceneContext from "@/components/usecase/crm-deal/SceneContext";
import SceneUpdate from "@/components/usecase/crm-deal/SceneUpdate";
import SceneTimeline from "@/components/usecase/crm-deal/SceneTimeline";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function CrmDealUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <CrmDealHero />
      <SceneAnalyse />
      <SceneContext />
      <SceneUpdate />
      <SceneTimeline />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
