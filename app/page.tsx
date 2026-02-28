import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PainPointsSection from '@/components/PainPointsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import DifferentiatorsSection from '@/components/DifferentiatorsSection'
import ComparisonSection from '@/components/ComparisonSection'
import UseCasesSection from '@/components/UseCasesSection'
import TrustSection from '@/components/TrustSection'
import CtaBanner from '@/components/CtaBanner'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <Navbar />
      <HeroSection />

      {/* Section Divider */}

      <PainPointsSection />

      {/* Section Divider */}

      <HowItWorksSection />

      {/* Section Divider */}

      <DifferentiatorsSection />

      {/* Section Divider */}

      <ComparisonSection />

      {/* Section Divider */}

      <UseCasesSection />

      {/* Section Divider */}

      <TrustSection />

      {/* Section Divider */}

      <div className="bg-bg w-full px-4 sm:px-6 lg:px-8 py-16">
        <CtaBanner />
      </div>

      <FinalCtaSection />

      <Footer />
    </div>
  )
}
