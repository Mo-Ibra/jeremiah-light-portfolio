import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <VideoReels />
      <Services />
      <CaseStudies />
      <Portfolio />
      <Process />
      <Comparison />
    </>
  );
}

export default Home;
