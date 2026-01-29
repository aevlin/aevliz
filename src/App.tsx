import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Posters } from "./components/Posters";
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
    // Updated to Dark Theme (#050505) with Neon Yellow Accents (#D9FF00)
    <div className="bg-[#050505] text-white font-sans selection:bg-[#D9FF00] selection:text-black relative w-full">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@400;500;700;900&display=swap');
        
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
        html, body {
           width: 100%;
           min-height: 100%;
           margin: 0;
           padding: 0;
           overflow-x: hidden;
           overflow-y: auto; 
           background-color: #050505;
        }
        .font-serif-italic {
           font-family: 'Playfair Display', serif;
           font-style: italic;
        }
        /* Grid Overlay Pattern */
        .bg-grid-pattern {
           background-size: 40px 40px;
           background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && <TakeOffLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorEffect />
          {currentView === "portfolio" ? (
            <main className="w-full relative bg-grid-pattern">
              <Navbar />
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Projects onProjectClick={handleProjectClick} />
              </section>
              <section id="posters">
                 <Posters />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </main>
          ) : (
             <div className="bg-[#050505] text-white w-full relative">
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
