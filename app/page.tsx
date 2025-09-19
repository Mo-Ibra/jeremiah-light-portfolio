import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <VideoReels />
      <Services />
      {/* <CaseStudies /> */}
      {/* <Portfolio /> */}
      {/* <Process /> */}
    </>
  );
}

export default Home;
