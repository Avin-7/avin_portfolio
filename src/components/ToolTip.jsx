import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
