import React from 'react';
import NavBar from './components/NavBar';
import HeroV2 from './components/HeroV2';
import ProblemAgitation from './components/ProblemAgitation';
import SolutionIntro from './components/SolutionIntro';
import Curriculum from './components/Curriculum';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import OfferStack from './components/OfferStack';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-14">
        {/* Section 1: Hero */}
        <HeroV2 />
        {/* Section 2: Problem / Agitation */}
        <ProblemAgitation />
        {/* Section 3: Solution & Introduction */}
        <SolutionIntro />
        {/* Section 4: Curriculum */}
        <Curriculum />
        {/* Section 5: Showcase */}
        <Showcase />
        {/* Section 6: Testimonials */}
        <Testimonials />
        {/* Section 7: Offer Stack */}
        <OfferStack />
        {/* Section 8: Guarantee */}
        <Guarantee />
        {/* Section 9: FAQ */}
        <FAQ />
        {/* Section 10: Final CTA */}
        <FinalCTA />
        <footer className="border-t border-white/10 bg-black/70">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} JR AICADEMY. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
