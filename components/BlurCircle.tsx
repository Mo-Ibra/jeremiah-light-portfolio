import React from "react";

interface BlurCircleProps {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  blur?: string;
  color?: string;
}

const BlurCircle: React.FC<BlurCircleProps> = ({
  top = "50%",
  left = "0%",
  width = "600px",
  height = "400px",
  blur = "300px",
  color = "bg-primary",
}) => {
  return (
    <div
      className={`absolute ${color} rounded-full blur-[var(--blur)]`}
      style={{
        top,
        left,
        width,
        height,
        filter: `blur(${blur})`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default BlurCircle;