import React from "react";

const ProgressBar = ({ progress, color, labelColor, remainderColor }) => {
  return (
    <div className="flex items-center justify-between">
      <div className={`w-3/4 h-2.5 ${remainderColor} rounded-full overflow-hidden`}>
        <div
          className={`h-full rounded-r-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className={`text-sm font-semibold ${labelColor}`}>{progress}%</span>
    </div>
  );
};

export default ProgressBar;
