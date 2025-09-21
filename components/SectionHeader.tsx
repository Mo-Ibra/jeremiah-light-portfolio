import React, { ReactNode } from "react";

interface SectionHeaderProps {
  badgeText: string;
  marginBottom?: string;
  children: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badgeText, marginBottom = "16", children }) => {
  return (
    <div className={`text-center mb-${marginBottom}`}>
      <div className="inline-flex items-center bg-indigo-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
        {badgeText}
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;