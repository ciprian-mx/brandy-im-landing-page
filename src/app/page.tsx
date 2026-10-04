import Navbar from '@/components/landing/Navbar';
import CookieNotice from '@/components/landing/CookieNotice';
import Hero from '@/components/landing/Hero';
import Marquee from '@/components/landing/Marquee';
import ProblemBento from '@/components/landing/ProblemBento';
import InteractiveExpansionEngine from '@/components/landing/InteractiveExpansionEngine';
import OutcomesMetrics from '@/components/landing/OutcomesMetrics';
import UseCasesICP from '@/components/landing/UseCasesICP';
import TransparentFAQ from '@/components/landing/TransparentFAQ';
import LiveRoadmapDemo from '@/components/landing/LiveRoadmapDemo';
import Footer from '@/components/landing/Footer';
import CaseStudies from '@/components/landing/CaseStudies';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-base">
      <Navbar />
      <CookieNotice />
      
      <main>
        <Hero />
        <Marquee />
        <ProblemBento />
        <InteractiveExpansionEngine />
        <OutcomesMetrics />
        <UseCasesICP />
        <CaseStudies/>
        <TransparentFAQ />
        <LiveRoadmapDemo />
      </main>
      
      <Footer />
    </div>
  );
}
