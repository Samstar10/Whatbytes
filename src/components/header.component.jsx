import logo from '../assets/logo.png';
import headshot from '../assets/IMG_0844.jpg'

const Header = ({ toggleSidebar }) => {

	return (
		<div className="border-b border-gray-300 px-6 py-3 h-32 flex items-center fixed top-0 left-0 right-0 z-20 bg-white">
			<header className='flex items-center justify-between w-full'>
				<div className="flex items-center gap-4">
          <button
            className="text-gray-500 text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <img src={logo} alt="WhatBytes Company logo" className="h-14" />
        </div>

				<div className='flex items-center gap-1.5 border-2 p-2 border-gray-300 rounded-xl'>
					<img 
						src={headshot} 
						alt="Profile picture" 
						className='w-10 h-10 rounded-full'
					/>
					<span className='font-semibold text-xl'>Samuel Muli</span>
				</div>
			</header>
		</div>
	)
}

export default Header