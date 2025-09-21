import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import FAQs from "@/components/Faqs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      <Features />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
