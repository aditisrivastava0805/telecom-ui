import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChargingStatusCard from './components/ChargingStatusCard'
import ChargingControlsCard from './components/ChargingControlsCard'
import LogCard from './components/LogCard'
import SetupSidebar from './components/SetupSidebar'

export default function App() {
  const [service, setService] = useState('Voice')
  const [logs, setLogs] = useState([])
  const [aNumber, setANumber] = useState('')
  const [aImsi, setAImsi] = useState('')
  const [ratingGroup, setRatingGroup] = useState('')
  const [showSession, setShowSession] = useState(true)

  const addLog = (message, label, detail) => {
    setLogs([
      ...logs,
      {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        message: `${message} ${label ? label : ''}`,
        detail,
      },
    ])
  }

  return (
    <div className="flex h-screen bg-muted">
      <Sidebar
        service={service}
        setService={setService}
        aNumber={aNumber}
        setANumber={setANumber}
        aImsi={aImsi}
        setAImsi={setAImsi}
        ratingGroup={ratingGroup}
        setRatingGroup={setRatingGroup}
        showSession={showSession}
        setShowSession={setShowSession}
      />
      <SetupSidebar
        showSession={showSession}
        setShowSession={setShowSession}
        aNumber={aNumber}
        setANumber={setANumber}
        aImsi={aImsi}
        setAImsi={setAImsi}
        ratingGroup={ratingGroup}
        setRatingGroup={setRatingGroup}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto px-2 py-4">
            <ChargingStatusCard
              aNumber={aNumber}
              aImsi={aImsi}
              ratingGroup={ratingGroup}
            />
            <ChargingControlsCard service={service} addLog={addLog} />
            <div className="col-span-2">
              <LogCard logs={logs} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
