"use client";

import React, { ReactNode } from "react";
// import { motion } from "framer-motion";

interface SectionHeaderProps {
  badgeText: string;
  badgeBackgroundColor?: string;
  withLabel?: boolean;
  className?: string;
  children: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeBackgroundColor = "bg-indigo-100",
  withLabel = true,
  className = "",
  children,
}) => {
  return (
    <div
      className={`text-center ${className}`}
      // initial={{ opacity: 0, y: 40 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.6,
      //   type: "spring",
      //   stiffness: 120,
      // }}
      // viewport={{ once: true, amount: 0.3 }}
    >
      {/* Badge */}
      {withLabel && (
        <div
          className={`inline-flex items-center ${badgeBackgroundColor} text-primary px-5 py-1 rounded-full text-sm font-medium mb-6`}
        >
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          {badgeText}
        </div>
      )}

      {/* Title or children */}
      <div
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.5,
      //   type: "spring",
      //   stiffness: 120,
      //   delay: 0.15,
      // }}
      // viewport={{ once: true }}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;
