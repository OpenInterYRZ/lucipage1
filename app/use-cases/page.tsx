import Navbar from "@/components/Navbar";
import UseCaseSectionMasonry from "@/components/usecase/UseCaseSectionMasonry";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
  return (
    <div className="w-full h-full mx-auto">
      <Navbar />
      <div className="pt-24" />
      <UseCaseSectionMasonry />
      <Footer />
    </div>
  );
}
