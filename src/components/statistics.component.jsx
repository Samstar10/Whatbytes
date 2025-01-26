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
			<div className="flex flex-col gap-4 md:flex-row justify-between md:items-center">
				<div className="flex gap-2 items-center">
					<div className="bg-gray-100 relative w-12 md:w-20 h-12 md:h-20 flex items-center justify-center rounded-full">
						<img src={Trophy} alt="Trophy emoji" className='w-6 h-6 md:w-10 md:h-10' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold md:text-xl">{rank}</span>
						<span className="text-gray-500 text-sm md:text-base">YOUR RANK</span>
					</div>
				</div>

				<div className="hidden md:block md:border-r md:border-gray-200 md:h-32"></div>

				<div className="flex gap-2 items-center">
					<div className="bg-gray-100 relative w-12 md:w-20 h-12 md:h-20 flex items-center justify-center rounded-full">
						<img src={Clipboard} alt="Clipboard emoji" className='w-10 h-10' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold md:text-xl">{percentile}%</span>
						<span className="text-gray-500 text-sm md:text-base">PERCENTILE</span>
					</div>
				</div>

				<div className="hidden md:block md:border-r md:border-gray-200 md:h-32"></div>

				<div className="flex gap-2 items-center">
					<div>
						<img src={Tick} alt="Tick emoji" className='w-12 h-12 md:w-20 md:h-20 rounded-full' />
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-bold md:text-xl">{score} / 15</span>
						<span className="text-gray-500 text-sm md:text-base">CORRECT ANSWERS</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics