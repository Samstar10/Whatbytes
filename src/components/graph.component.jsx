import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { ScoreContext } from "../context/score-context";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
  annotationPlugin
);

const ComparisonChart = () => {
	const { percentile } = useContext(ScoreContext);

  const data = {
    labels: [0, 25, 50, 75, 100], 
    datasets: [
      {
        label: "Comparison Curve",
        data: [5, 15, 45, 35, 10], 
        fill: false,
        borderColor: "rgba(93, 164, 214, 1)", 
        tension: 0.4, 
        pointBackgroundColor: "rgba(93, 164, 214, 1)",
        pointBorderColor: "rgba(93, 164, 214, 1)",
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `Number of Students: ${context.raw}`,
        },
      },
      annotation: {
				annotations: {
					percentileLine: {
						type: 'line',
						yMin: percentile,
						yMax: percentile,
						borderColor: '#808080',
						borderWidth: 1,
					}
				}
			}
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 w-3/4">
          <h1 className="font-bold">Comparison Graph</h1>
          <p className="text-gray-600">
            <span className="font-semibold">You scored 30% percentile.</span>{" "}
            Which is lower than the average percentile 72% of all engineers who
            took this assessment
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-full">
          <p className="text-xl">📈</p>
        </div>
      </div>

      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonChart;
