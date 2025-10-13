const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-r from-primary to-indigo-400 rounded-3xl p-12 text-center overflow-hidden shadow-2xl">

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
          <h2 className="relative z-10 text-xl sm:text-4xl md:text-5xl font-bold text-white pb-6 mb-6 flex items-center justify-center gap-4 after:content-[''] after:block after:h-[2px] after:w-2/3 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
            Ready to Scale
            <div className="bg-white rounded-lg p-2 -rotate-12 shadow-2xl cursor-pointer hover:scale-110 transition-all">
              <svg
                className="w-8 h-8 text-primary"
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
            Your Brand?
          </h2>
          <p className="relative z-10 text-indigo-100 mb-2 max-w-4xl mx-auto leading-relaxed text-sm font-bold">
            I work with a maximum of 4 brands at any given time to ensure my
            partners get the focus and results they deserve.
          </p>
          <p className="relative z-10 text-indigo-100 mb-2 max-w-4xl mx-auto leading-relaxed text-sm font-bold">There is currently 1 spot available for a new partnership</p>
          <p className="relative z-10 text-indigo-100 mb-4 max-w-4xl mx-auto leading-relaxed text-sm font-bold">Apply below to see if we’re a good fit.</p>
          <button className="relative z-10 bg-white text-primary px-8 py-4 rounded-xl shadow-2xl cursor-pointer text-lg font-semibold hover:bg-gray-50 mb-4 hover:scale-110 transition-all">
            Schedule Free Ads Audit
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
