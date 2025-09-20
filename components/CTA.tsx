const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-indigo-400 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
            Ready to Scale
            <div className="bg-white rounded-lg p-2">
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
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            For quality purposes, I work with only 2-4 brands at a time.
            <br />
            Apply below to speak with me and secure your spot.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg mb-4">
            Book Meeting
          </button>
          <div className="flex items-center justify-center gap-2 text-indigo-200">
            <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
            <span className="text-sm">1 Spot Left</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
