import React from "react";
import clsx from "clsx";

interface LayeredCardProps {
  children: React.ReactNode;

  // default border color (applies to both)
  borderColor?: string;                // e.g. "border-gray-600"

  // hover border color (applies to both)
  hoverBorderColor?: string;           // e.g. "group-hover:border-white"

  // main card background
  backgroundColor?: string;

  // back layer bg on hover
  backBgHover?: string;                // e.g. "group-hover:bg-pink-500/20"

  offset?: string;
  rounded?: string;
  className?: string;
  cardSize?: string
  backBgColor?: string
}

export default function LayeredCard({
  children,
  borderColor = "",
  hoverBorderColor = "",
  backgroundColor = "",
  backBgHover = "",
  offset = "translate-x-2 translate-y-2",
  rounded = "rounded-none",
  className = "",
  cardSize="",
  backBgColor=""
}: LayeredCardProps) {
  return (
    <div className={clsx("relative group", className)}>
      <div
        className={clsx(
          "border-3 absolute inset-0 pointer-events-none transition-colors",
          rounded,
          borderColor,
          hoverBorderColor, 
          backBgHover,
          backBgColor,
          cardSize,
          offset
        )}
      />

      {/* FRONT CARD */}
      <div
        className={clsx(
          "border-3 relative z-10 transition-colors",
          rounded,
          backgroundColor,
          borderColor,
          hoverBorderColor,
          cardSize,
        )}
      >
        {children}
      </div>

    </div>
  );
}
