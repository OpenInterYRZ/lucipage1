import ManagersHero from "@/components/usecase/managers/ManagersHero";
import PainPoints from "@/components/usecase/managers/PainPoints";
import SceneMeetingMemory from "@/components/usecase/managers/SceneMeetingMemory";
import SceneActionItems from "@/components/usecase/managers/SceneActionItems";
import SceneAutoFollowUp from "@/components/usecase/managers/SceneAutoFollowUp";
import SceneCrossMeeting from "@/components/usecase/managers/SceneCrossMeeting";
import BeforeAfter from "@/components/usecase/managers/BeforeAfter";
import DataHighlights from "@/components/usecase/managers/DataHighlights";
import SceneGallery from "@/components/usecase/managers/SceneGallery";
import Testimonial from "@/components/usecase/managers/Testimonial";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function ManagersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <ManagersHero />
      <PainPoints />
      <SceneMeetingMemory />
      <SceneActionItems />
      <SceneAutoFollowUp />
      <SceneCrossMeeting />
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
