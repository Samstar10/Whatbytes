import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ScoreContext } from "../context/score-context";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = () => {
	const { score } = useContext(ScoreContext);

	const data = {
		labels: ['Correct', 'Incorrect'],
		datasets: [
			{
				data: [score, 15 - score],
				backgroundColor: [
					'#1565C0',
					'rgba(54, 162, 235, 0.1)',
				],
				borderWidth: 0,
			},
		],
	}

	const options = {
		responsive: true,
		cutout: 150,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
	}

	const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const text = "🎯";
      const fontSize = (height / 100).toFixed(2) * 15;
      ctx.font = `${fontSize}px Arial`;
      ctx.textBaseline = "middle";

      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

	return (
		<div className="border border-gray-300 py-8 px-6 rounded-lg flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h1 className="font-bold">Question Analysis</h1>
				<span className="text-blue-800 font-bold">10/15</span>
			</div>

			<p className="text-gray-600"><span className="font-semibold">You scored 10 question correct out of 15.</span> However it still needs some improvements</p>

			<div>
				<Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
			</div>
		</div>
	)
}

export default QuestionAnalysis