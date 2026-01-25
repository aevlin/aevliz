import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { DesignWorks } from "./components/DesignWorks";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorEffect } from "./components/CursorEffect";
import { TakeOffLoader } from "./components/TakeOffLoader";
import { ToneUp } from "./components/case-studies/ToneUp";
import { AEVFLIX } from "./components/case-studies/AEVFLIX";
import { Cavera } from "./components/case-studies/Cavera";
import { WhatsApp1990s } from "./components/case-studies/WhatsApp1990s";
import Lenis from 'lenis';
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentView, setCurrentView] = useState<"portfolio" | "toneup" | "aevflix" | "cavera" | "whatsapp1990s">("portfolio");
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis ONLY after loading is complete
  useLayoutEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Smooth scrolling for anchor links using Lenis
    const handleAnchorClick = (e: Event) => {
      const anchor = (e.currentTarget as HTMLElement);
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [loading, currentView]); 

  // Reset scroll when view changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const handleProjectClick = (caseStudy: string) => {
    if (caseStudy === "toneup") setCurrentView("toneup");
    else if (caseStudy === "aevflix") setCurrentView("aevflix");
    else if (caseStudy === "cavera") setCurrentView("cavera");
    else if (caseStudy === "whatsapp1990s") setCurrentView("whatsapp1990s");
  };

  const handleBackToPortfolio = () => {
    setCurrentView("portfolio");
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white relative w-full">
       {/* Global styles to ensure scrollability and Lenis compatibility */}
       <style>{`
        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }
        .lenis.lenis-stopped {
          overflow: hidden;
        }
        /* Allow scrolling by default on html/body */
        html, body {
           width: 100%;
           min-height: 100%;
           margin: 0;
           padding: 0;
           overflow-x: hidden;
           /* Ensure native scroll is available if lenis fails or for accessibility */
           overflow-y: auto; 
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && <TakeOffLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorEffect />
          {currentView === "portfolio" ? (
            <main className="w-full relative">
              <Navbar />
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="work">
                <Projects onProjectClick={handleProjectClick} />
              </section>
              <section id="design-works">
                <DesignWorks />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </main>
          ) : (
             <div className="bg-white text-black w-full relative">
                {currentView === "toneup" && <ToneUp onBack={handleBackToPortfolio} />}
                {currentView === "aevflix" && <AEVFLIX onBack={handleBackToPortfolio} />}
                {currentView === "cavera" && <Cavera onBack={handleBackToPortfolio} />}
                {currentView === "whatsapp1990s" && <WhatsApp1990s onBack={handleBackToPortfolio} />}
             </div>
          )}
        </>
      )}
    </div>
  );
}
