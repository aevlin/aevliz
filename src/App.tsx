import { useEffect, useState } from "react";
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
import { LoadingScreen } from "./components/LoadingScreen";
import { ToneUp } from "./components/case-studies/ToneUp";
import { AEVFLIX } from "./components/case-studies/AEVFLIX";
import { Cavera } from "./components/case-studies/Cavera";
import { WhatsApp1990s } from "./components/case-studies/WhatsApp1990s";

export default function App() {
  const [currentView, setCurrentView] = useState<"portfolio" | "toneup" | "aevflix" | "cavera" | "whatsapp1990s">("portfolio");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return; // Skip invalid or empty anchors
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  const handleProjectClick = (caseStudy: string) => {
    if (caseStudy === "toneup") {
      setCurrentView("toneup");
    } else if (caseStudy === "aevflix") {
      setCurrentView("aevflix");
    } else if (caseStudy === "cavera") {
      setCurrentView("cavera");
    } else if (caseStudy === "whatsapp1990s") {
      setCurrentView("whatsapp1990s");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentView("portfolio");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  // Render case study pages
  if (currentView === "toneup") {
    return (
      <div className="min-h-screen bg-white">
        <CursorEffect />
        <ToneUp onBack={handleBackToPortfolio} />
      </div>
    );
  }

  if (currentView === "aevflix") {
    return (
      <div className="min-h-screen bg-white">
        <CursorEffect />
        <AEVFLIX onBack={handleBackToPortfolio} />
      </div>
    );
  }

  if (currentView === "cavera") {
    return (
      <div className="min-h-screen bg-white">
        <CursorEffect />
        <Cavera onBack={handleBackToPortfolio} />
      </div>
    );
  }

  if (currentView === "whatsapp1990s") {
    return (
      <div className="min-h-screen bg-white">
        <CursorEffect />
        <WhatsApp1990s onBack={handleBackToPortfolio} />
      </div>
    );
  }

  // Render main portfolio
  return (
    <div className="min-h-screen bg-white relative">
      <CursorEffect />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      
      {/* Massive spacing between sections - like separate pages */}
      <div className="h-64" />
      
      <section id="about">
        <About />
      </section>
      
      <div className="h-32" />
      
      <section id="experience">
        <Experience />
      </section>
      
      <div className="h-32" />
      
      <section id="work">
        <Projects onProjectClick={handleProjectClick} />
      </section>
      
      <div className="h-32" />
      
      <section id="design-works">
        <DesignWorks />
      </section>
      
      <div className="h-32" />
      
      <section id="skills">
        <Skills />
      </section>
      
      <div className="h-32" />
      
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}