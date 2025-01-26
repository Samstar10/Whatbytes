import React, { useState } from "react";

export const useScoreUpdates = () => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  return {
    rank,
    setRank,
    percentile,
    setPercentile,
    score,
    setScore
  }
}