import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="w-full h-full mx-auto">
      <Navbar />
      <div className="pt-24" />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold text-text-0">Privacy Policy</h1>
        <p className="mt-4 text-lg text-text-2">
          Your privacy matters to us.
        </p>
      </section>
      <Footer />
    </div>
  );
}
