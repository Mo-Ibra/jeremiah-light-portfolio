import { useEffect, useState } from "react";

type CTAProps = {
  onOpenQuiz: () => void;
};

const CTA = ({ onOpenQuiz }: CTAProps) => {

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
    <section className="md:py-16 py-12 px-6" id="cta">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-r max-w-7xl from-primary to-indigo-400 rounded-3xl p-10 md:p-12 text-center overflow-hidden"
          style={{ boxShadow: isMobile ? "0px 15px 15px 5px #00000040" :  "0px 30px 30px 12px #00000040", }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Content */}
          <h2 className="relative z-10 text-2xl sm:text-4xl font-bold text-white mb-4 flex flex-col sm:flex-row items-center justify-center md:gap-2">
            <span className="flex items-center gap-2">
              <p className="relative left-5 sm:static sm:left-0 text-[#dddddd60]">
                {" "}
                Ready to <span className="text-white">Scale</span>
              </p>
              <div className="bg-white rounded-lg p-2 -rotate-12 shadow-lg sm:static sm:translate-y-0 sm:translate-x-0 -translate-y-2 translate-x-5 sm:mb-0 mb-2">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </span>
            <span className="text-[#dddddd60]">Your <span className="text-white">Brand?</span></span>
          </h2>
          <p className="relative z-10 text-[#ffffff90] md:mb-2 mb-4 max-w-4xl mx-auto leading-relaxed text-sm md:text-base ">
            I work with a maximum of 4 brands at any given time to ensure my
            partners get the focus and results they deserve.
          </p>
          <p className="relative z-10 text-[#ffffff90] md:mb-2 mb-4 max-w-4xl mx-auto leading-relaxed text-sm md:text-base ">
            There is currently 1 spot available for a new partnership
          </p>
          <p className="relative z-10 text-[#ffffff90] md:mb-4 mb-4 max-w-4xl mx-auto leading-relaxed text-sm md:text-base ">
            Apply below to see if we&apos;re a good fit.
          </p>
          <button
            className="relative z-10 bg-white text-primary md:px-8 px-4 md:py-4 py-3 rounded-xl shadow-2xl cursor-pointer text-xs md:text-lg font-semibold hover:bg-gray-50 mb-4 hover:scale-110 transition-all"
            onClick={onOpenQuiz}
          >
            Book Meeting
          </button>
          <div className="relative z-10 flex items-center justify-center gap-2 text-indigo-200">
            <div className="w-2 h-2 rounded-full bg-[#E3E6FF] animate-pulse"></div>
            <span className="text-sm">1 Spot Left</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
