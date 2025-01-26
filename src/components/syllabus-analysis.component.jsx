import React from "react";
import ProgressBar from "../shared/progress-bar.component";

const SyllabusAnalysis = () => {
  return (
		<div className="border border-gray-300 py-8 px-6 rounded-lg flex flex-col gap-10">
			<h1 className="font-bold">Syllabus Wise Analysis</h1>
			<div className="flex flex-col gap-10 text-gray-500 text-sm md:text-base">
				<div className="flex flex-col gap-4">
					<h3>HTML Tools, Forms, History</h3>
					<ProgressBar progress={80} color="bg-blue-500" labelColor="text-blue-500" remainderColor="bg-blue-100" />
				</div>

				<div className="flex flex-col gap-4">
					<h3>Tags & References in HTML</h3>
					<ProgressBar progress={60} color="bg-orange-500" labelColor="text-orange-500" remainderColor="bg-orange-100" />
				</div>

				<div className="flex flex-col gap-4">
					<h3>Tables & References in HTML</h3>
					<ProgressBar progress={24} color="bg-red-400" labelColor="text-red-500" remainderColor="bg-red-100" />
				</div>

				<div className="flex flex-col gap-4">
					<h3>Tables & CSS Basics</h3>
					<ProgressBar progress={96} color="bg-green-500" labelColor="text-green-500" remainderColor="bg-green-100" />
				</div>
			</div>
		</div>
	)
}

export default SyllabusAnalysis