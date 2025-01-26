import './App.css'
import Header from './components/header.component'
import Sidebar from './components/sidebar.component'
import Html from './components/html.component'
import Statistics from './components/statistics.component'
import SyllabusAnalysis from './components/syllabus-analysis.component'
import QuestionAnalysis from './components/question-analysis.component'
import ComparisonChart from './components/graph.component'
import { ScoreProvider } from './context/score-context'
import { useState } from 'react'

function App() { 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ScoreProvider>
      <div className=''>
        <Header toggleSidebar={toggleSidebar} />
        <div className='flex'>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`p-6 grid grid-cols-5 gap-4 mt-32 md:ml-64 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className='space-y-6 col-span-5 lg:col-span-3'>
              <Html />
              <Statistics />
              <ComparisonChart />
            </div>

            <div className='col-span-5 lg:col-span-2 space-y-6'>
              <SyllabusAnalysis />
              <QuestionAnalysis />
            </div>
          </div>
        </div>
      </div>
    </ScoreProvider>
  )
}

export default App
