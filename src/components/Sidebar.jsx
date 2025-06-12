import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, FileText, Settings, Phone, MessageCircleMore, Users, MessageSquare, Layers } from 'lucide-react'

export default function Sidebar({
  service, setService,
  aNumber, setANumber,
  aImsi, setAImsi,
  ratingGroup, setRatingGroup,
  showSession, setShowSession
}) {
  const [showAdvanced, setShowAdvanced] = useState(() => {
    const stored = localStorage.getItem('show-advanced')
    return stored === 'true'
  })

  useEffect(() => {
    localStorage.setItem('show-advanced', showAdvanced)
  }, [showAdvanced])

  // Sidebar width is always collapsed now
  const sidebarWidth = 'w-28'

  return (
    <div className={`p-5 h-screen overflow-y-auto bg-gray-200 shadow-xl flex flex-col space-y-8 items-center transition-all duration-300 ${sidebarWidth}`}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6 w-full transition-all duration-300">
        <div className="bg-blue-100 p-2 rounded-2xl ring-2 ring-blue-400 transition-all duration-300">
          <svg width="24" height="24" fill="currentColor" className="text-blue-600">
            <path d="M5 3a1 1 0 0 0-1 1v16h2v-6h12v6h2V4a1 1 0 0 0-1-1H5zm1 8V5h12v6H6z" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-8 w-full">
        <button
          className={`p-3 rounded-xl transition ${service === 'Voice' ? 'bg-green-50 ring-2 ring-green-300' : 'hover:bg-green-50'}`}
          onClick={() => setService('Voice')}
          aria-label="Voice"
        >
          <Phone size={24} className={`transition ${service === 'Voice' ? 'text-green-600' : 'text-green-400'}`} />
        </button>
        <button
          className={`p-3 rounded-xl transition ${service === 'SMS' ? 'bg-blue-50 ring-2 ring-blue-300' : 'hover:bg-blue-50'}`}
          onClick={() => setService('SMS')}
          aria-label="SMS"
        >
          <MessageCircleMore size={24} className={`transition ${service === 'SMS' ? 'text-blue-600' : 'text-blue-400'}`} />
        </button>
        <button
          className={`p-3 rounded-xl transition ${service === 'Data' ? 'bg-red-50 ring-2 ring-red-300' : 'hover:bg-red-50'}`}
          onClick={() => setService('Data')}
          aria-label="Data"
        >
          <Settings size={24} className={`transition ${service === 'Data' ? 'text-red-600' : 'text-red-400'}`} />
        </button>
      </nav>

      {/* Setup Button */}
      <div className="mt-auto w-full">
        <button
          onClick={() => setShowSession(true)}
          className="flex items-center justify-between w-full text-s font-semibold text-gray-700 mb-6 px-1 hover:text-blue-700 transition"
        >
          <span>Setup</span>
          <ChevronRight size={23} />
        </button>
        <div className="text-xs text-gray-400 px-2 pt-4">
          <p>v1.0.0 • ECEVS</p>
        </div>
      </div>
    </div>
  )
}
