import Image from "next/image";
import BlurCircle from "./BlurCircle";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden z-50" id="about">
      <BlurCircle
        left="1000px"
        blur="250px"
        width="300px"
        height="450px"
        className="-z-10"
      />

      <div className="max-w-4xl md:max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader badgeText="About Me">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-6">
            Message From {" "}
            <span className="text-primary">Our Founder </span>
          </h2>
        </SectionHeader>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-4xl md:max-w-6xl mx-auto">
          {/* Left Column - Video/Image */}
          <div className="flex justify-center mb-4">
            <div className="relative overflow-hidden rounded-3xl border-4 border-primary bg-gray-200 aspect-[4/5] w-full max-w-[400px] sm:max-w-[450px] md:max-w-[488px]">
              <img
                src="/images/portfolio/2.jpg"
                alt="Jeremiah - Creative Director"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/40 to-gray-900/0"></div> */}

              {/* Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary hover:bg-indigo-700 transition-colors rounded-full p-2 cursor-pointer">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <div className="md:mb-12 leading-24">
                <h3 className="text-[87px] md:text-[93px] text-gray-900 drop-shadow-2xl">
                  Hey! I&apos;m
                </h3>
                <span className="text-[92px] md:text-[110px] italic text-primary font-serif drop-shadow-2xl font-instrument">
                  Jeremiah
                </span>
              </div>
              <p className="max-w-2xl mx-auto text-2xl font-semibold text-[#00000073] leading-8 mt-2">
                I'm obsessed with performance and so is my team. As your
                dedicated creative partner, I personally lead the strategy and
                execution for the handful of ambitious brands we work with. This
                founder-led approach ensures I can build and manage the creative
                system that fuels your growth.
              </p>
            </div>

            {/* Social Links and CTA */}
            <div className="flex items-center justify-center lg:justify-start md:gap-32 gap-16">
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white z-50 text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white z-50 text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white z-50 text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/twitter.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                  />
                </a>
              </div>

              <Button className="px-6 md:px-12 py-3 md:py-2 bg-primary text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg space-x-2 shadow-2xl">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
