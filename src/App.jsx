import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import Controls from './components/Controls'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-6 grid grid-cols-2 gap-4">
          <StatsCard title="Daily Charge Volume" value="$500" type="summary" />
          <StatsCard title="A-Number Activity Frequency" value="1500" type="summary" />
          <StatsCard title="Daily Charge Volume Trend" value="$500" subtitle="Last 7 Days +10%" type="line" />
          <StatsCard title="A-Number Activity Frequency" value="1500" subtitle="Last 7 Days -5%" type="bar" />
          <Controls title="Charging Controls" type="control" />
          <Controls title="Charging Stats" type="stats" />
        </main>
      </div>
    </div>
  )
}

export default App