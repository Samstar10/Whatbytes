import React, { createContext, useState } from "react";

export const ScoreContext = createContext({});

export const ScoreProvider = ({ children }) => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  console.log(rank, percentile, score);

  return (
    <ScoreContext.Provider
      value={{
        rank,
        setRank,
        percentile,
        setPercentile,
        score,
        setScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
