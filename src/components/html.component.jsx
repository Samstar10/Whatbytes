import React, { useContext, useState } from "react";
import htmlLogo from '../assets/html.png';
import Modal from "../modals/score.modal";
import { ScoreContext } from "../context/score-context";

const Html = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { rank, setRank, percentile, setPercentile, score, setScore } = useContext(ScoreContext);

	const [ranking, setRanking] = useState(rank);
	const [percent, setPercent] = useState(percentile);
	const [scored, setScored] = useState(score);

	const formatDate = () => {
		const today = new Date();
		const options = { day: 'numeric', month: 'long', year: 'numeric' };
		return today.toLocaleDateString('en-GB', options);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
		setRanking(rank);
		setPercent(percentile);
		setScored(score);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleScoreUpdate = () => {
		setRank(ranking);
		setPercentile(percent);
		setScore(scored);
		setIsModalOpen(false);
	};

  return (
		<div className='flex flex-col md:flex-row gap-2 border border-gray-300 p-6 rounded-lg'>
			<div className="flex items-center justify-center">
				<img src={htmlLogo} alt="HTML logo" className='w-10 h-10 md:w-16 md:h-16' />
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-sm md:text-base">Hyper Text Markup Language</h1>
				<div className="flex gap-2 text-gray-600">
					<span className="text-xs md:text-base">Questions: 8</span>
					<span>I</span>
					<span className="text-xs md:text-base">Duration: 15 mins</span>
					<div>I</div>
					<span className="text-xs md:text-base">Submitted on {formatDate()}</span>
				</div>
			</div>

			<div>
				<button 
					className="bg-blue-900 hover:bg-blue-800 text-white text-xs md:text-base font-semibold py-2 px-4 rounded-lg w-full md:w-auto"
					onClick={handleOpenModal}
				>
						Update
				</button>
			</div>

			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex items-center justify-between mb-2 md:mb-8">
					<h2 className="text-sm md:text-3xl font-bold mb-4">Update scores</h2>
					<img src={htmlLogo} alt="HTML logo" className='w-10 h-10 md:w-10 md:h-10' />
				</div>

        <div>
					<form action="" className="flex flex-col gap-4 md:gap-10">
						<div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="bg-blue-900 py-1 px-2 md:px-3 rounded-full">
									<p className="text-white text-xs md:text-base font-bold">1</p>
								</div>
								<label htmlFor="rank" className="text-xs md:text-base" >Update your <span className="font-semibold">Rank</span></label>
							</div>
							<input 
								type="number" 
								id="rank"
								value={ranking}
								className="border border-blue-900 py-1 md:py-2 px-1 md:px-3 rounded-lg font-semibold text-sm md:text-base focus:outline-none w-full"
								onChange={(e) => setRanking(Number(e.target.value))}
							/>
						</div>

						<div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="bg-blue-900 py-1 px-2 md:px-3 rounded-full">
									<p className="text-white text-xs md:text-base font-bold">2</p>
								</div>
								<label htmlFor="percentile" className="text-xs md:text-base" >Update your <span className="font-semibold">Percentile</span></label>
							</div>
							<input 
								type="number" 
								id="percentile"
								value={percent}
								className="border border-blue-900 py-1 md:py-2 px-1 md:px-3 rounded-lg font-semibold text-sm md:text-base focus:outline-none w-full"
								onChange={(e) => setPercent(Number(e.target.value))}
							/>
						</div>

						<div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="bg-blue-900 py-1 px-2 md:px-3 rounded-full">
									<p className="text-white text-xs md:text-base font-bold">3</p>
								</div>
								<label htmlFor="score" className="text-xs md:text-base" >Update your <span className="font-semibold">Current Score (out of 15)</span></label>
							</div>
							<input 
								type="number" 
								id="score"
								value={scored}
								className="border border-blue-900 py-1 md:py-2 px-1 md:px-3 rounded-lg font-semibold text-sm md:text-base focus:outline-none w-full"
								onChange={(e) => setScored(Number(e.target.value))}
							/>
						</div>
					</form>

					<div className="flex flex-col md:flex-row justify-end gap-4 mt-8 md:mt-4">
						<div className="">
							<button 
								onClick={handleCloseModal}
								className="border border-blue-900 py-2 px-4 rounded-lg text-blue-900 text-sm md:text-base font-semibold w-full"
							>
								Cancel
							</button>
						</div>
						<div className="border-3 rounded-xl">
							<button onClick={handleScoreUpdate} className="bg-blue-900 hover:bg-blue-800 text-white text-sm md:text-base font-semibold py-2 px-4 rounded-lg flex justify-between md:gap-4 w-full">
								<p>Save</p>
								<span className="material-symbols-outlined">
									arrow_forward
								</span>
							</button>
						</div>
					</div>
				</div>
      </Modal>
		</div>
	)
}

export default Html