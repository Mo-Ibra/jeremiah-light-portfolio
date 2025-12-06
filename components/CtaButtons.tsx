"use client";

import { motion } from "framer-motion";

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          delay: 3,
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg shadow-xl font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <span>Schedule Free Ads Audit</span>
        <svg
          className="w-3 md:w-4 h-3 md:h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          delay: 3.5,
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-xl font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
      >
        <span>Show Me Some Proof First</span>
        <svg
          className="w-3 md:w-4 h-3 md:h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default CTAButtons;
