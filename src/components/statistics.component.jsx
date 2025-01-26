import React, { useContext } from "react";
import Trophy from '../assets/trophy.jpg'
import Clipboard from '../assets/clipboard.png'
import Tick from '../assets/tick.jpg'
import { ScoreContext } from "../context/score-context";

const Statistics = () => {
	const { rank, percentile, score } = useContext(ScoreContext);

  return (
		<div className='border border-gray-300 py-4 px-6 rounded-lg flex flex-col'>
			<h1 className="font-bold">Quick Statistics</h1>
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<div className="bg-gray-100 relative w-20 h-20 flex items-center justify-center rounded-full">
						<img src={Trophy} alt="Trophy emoji" className='w-10 h-10' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold text-xl">{rank}</span>
						<span className="text-gray-500">YOUR RANK</span>
					</div>
				</div>

				<div className="border-r border-gray-200 h-32"></div>

				<div className="flex gap-2 items-center">
					<div className="bg-gray-100 relative w-20 h-20 flex items-center justify-center rounded-full">
						<img src={Clipboard} alt="Clipboard emoji" className='w-10 h-10' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold text-xl">{percentile}%</span>
						<span className="text-gray-500">PERCENTILE</span>
					</div>
				</div>

				<div className="border-r border-gray-200 h-32"></div>

				<div className="flex gap-2 items-center">
					<div>
						<img src={Tick} alt="Tick emoji" className='w-20 h-20 rounded-full' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold text-xl">{score} / 15</span>
						<span className="text-gray-500">CORRECT ANSWERS</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics