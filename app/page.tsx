"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import FAQs from "@/components/Faqs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <VideoReels /> 
      <Services />
      {!isMobile && <Portfolio />}
      {/* <CaseStudies />/ */}
      {/* <AboutMe /> */}
      {/* <Process /> */}
      {/* <Comparison /> */}
      {/* <Features /> */}
      {/* <FAQs /> */}
      {/* <CTA /> */}
      <Footer />
    </>
  );
}

export default Home;
