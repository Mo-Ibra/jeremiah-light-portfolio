"use client";

import CTA from "@/components/CTA";
import FAQs from "@/components/Faqs";
import Footer from "@/components/Footer";
// import HeroForPortfolio from "@/components/HeroForPortfolio";
// import Navigation from "@/components/Navigation";
import NewNavigaton from "@/components/NewNavigation";
import NewHero from "@/components/NewHero";
import QuizModal from "@/components/QuizModal";
import VideoReelsForPortfolio from "@/components/VideoReelsForPortfolio";
import { useEffect, useState } from "react";
import HeroForPortfolio from "@/components/HeroForPortfolio";
function Page() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

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
      {/* <Navigation /> */}
      {/* <HeroForPortfolio /> */}
      <NewNavigaton />
      <NewHero />
      <VideoReelsForPortfolio />
      <FAQs />
      <CTA onOpenQuiz={openQuiz} />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      <Footer />
    </>
  );
}

export default Page;
