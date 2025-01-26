import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
		<div
      className={`border-r border-gray-300 py-10 md:py-20 pr-2 w-64 fixed top-32 left-0 h-screen z-10 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
			<ul className="flex flex-col gap-4 md:gap-8">
				<li className="flex items-center gap-4 bg-white py-2 px-6">
					<span className="material-symbols-outlined">equalizer</span>
					<span className="font-bold md:text-lg text-gray-500">Dashboard</span>
				</li>
				<li className="flex items-center gap-4 bg-gray-100 py-5 px-6 rounded-r-4xl">
					<span className="material-symbols-outlined">editor_choice</span>
					<span className="font-bold md:text-lg text-blue-800">Skill Test</span>
				</li>
				<li className="flex items-center gap-4 py-2 px-6">
					<span className="material-symbols-outlined">task</span>
					<span className="font-bold md:text-lg text-gray-500">Internship</span>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar