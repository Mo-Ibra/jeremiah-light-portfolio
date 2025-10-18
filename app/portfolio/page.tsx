"use client";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import QuizModal from "@/components/QuizModal";
import VideoReelsForPortfolio from "@/components/VideoReelsForPortfolio";
import { useState } from "react";

function Page() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  return (
    <>
      <Navigation />
      <VideoReelsForPortfolio />

      {/* <CTA onOpenQuiz={openQuiz} />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Page;
