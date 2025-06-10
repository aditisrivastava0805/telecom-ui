import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Controls from './components/Controls'
import ChargingView from './components/ChargingView'

export default function App() {
  const [service, setService] = useState('Voice')
  const [logs, setLogs] = useState([])

  const addLog = (message, detail, value) => {
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setLogs(prev => [
      ...prev,
      { time, message, detail, value }
    ])
  }

  return (
    <div className="flex h-screen bg-muted">
      <Sidebar service={service} setService={setService} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-6 space-y-4 overflow-y-auto">
          <Controls title="Charging Controls" service={service} addLog={addLog} />
          <ChargingView logs={logs} />
        </main>
      </div>
    </div>
  )
}
