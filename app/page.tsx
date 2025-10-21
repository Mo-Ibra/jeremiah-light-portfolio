"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
// import Portfolio from "@/components/Portfolio";
import TestimonialsSection from "@/components/Testimonials";
import CaseStudiesSection from "@/components/CaseStudies";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import FAQs from "@/components/Faqs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import QuizModal from "@/components/QuizModal";

function Home() {
  
  const [isMobile, setIsMobile] = useState(false);

  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isQuizOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isQuizOpen]);

  return (
    <>
      <Navigation />
      <Hero />
      <VideoReels />
      <CaseStudiesSection />
      <TestimonialsSection />
      <Services />
      {/* {!isMobile && <Portfolio />} */}
      <AboutMe />
      <Process />
      <Comparison />
      <Features />
      <FAQs />
      <CTA onOpenQuiz={openQuiz} />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      <Footer />
    </>
  );
}

export default Home;
