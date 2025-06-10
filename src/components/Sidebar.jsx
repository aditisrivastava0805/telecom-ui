import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, FileText, Settings, Phone, MessageCircleMore, Users, MessageSquare, Layers } from 'lucide-react'

export default function Sidebar({
  service, setService,
  aNumber, setANumber,
  aImsi, setAImsi,
  ratingGroup, setRatingGroup
}) {
  const [showAdvanced, setShowAdvanced] = useState(() => {
    const stored = localStorage.getItem('show-advanced')
    return stored === 'true'
  })
  const [showSession, setShowSession] = useState(true)

  useEffect(() => {
    localStorage.setItem('show-advanced', showAdvanced)
  }, [showAdvanced])

  // Sidebar width expands when session setup is open
  const sidebarWidth = showSession ? 'w-80' : 'w-28'

  return (
    <div className={`p-5 h-screen overflow-y-auto bg-gray-100 shadow-xl flex flex-col space-y-8 items-center transition-all duration-300 ${sidebarWidth}`}>
      {/* Header */}
      <div className={`flex items-center mb-6 w-full transition-all duration-300 ${showSession ? 'justify-start gap-3' : 'flex-col items-center gap-2'}`}>
        <div className={`bg-blue-100 p-2 ${showSession ? 'rounded-t-2xl rounded-b-none' : 'rounded-2xl'} transition-all duration-300`}>
          <svg width="24" height="24" fill="currentColor" className="text-blue-600">
            <path d="M5 3a1 1 0 0 0-1 1v16h2v-6h12v6h2V4a1 1 0 0 0-1-1H5zm1 8V5h12v6H6z" />
          </svg>
        </div>
        {showSession && (
          <span className="text-lg font-bold text-blue-900 tracking-tight">VxS Toolbox <span className="font-normal text-gray-500">- ECEVS</span></span>
        )}
      </div>

      {/* Navigation */}
      {showSession ? (
        <nav className="space-y-3 text-sm font-semibold w-full">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
              service === 'Voice'
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-gray-200 border-gray-200 text-green-700 hover:bg-green-50 hover:border-green-200'
            } transition w-full`}
            onClick={() => setService('Voice')}
          >
            <Phone size={18} className="text-green-500" /> Voice
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
              service === 'SMS'
                ? 'bg-blue-50 border-blue-200 text-blue-700'
                : 'bg-gray-200 border-gray-200 text-blue-700 hover:border-blue-200 hover:bg-blue-50'
            } transition w-full`}
            onClick={() => setService('SMS')}
          >
            <MessageCircleMore size={18} className="text-blue-500" /> SMS
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
              service === 'Data'
                ? 'bg-red-50 border-red-200 text-red-700'
                : 'bg-gray-200 border-gray-200 text-red-700 hover:bg-red-50 hover:border-red-200'
            } transition w-full`}
            onClick={() => setService('Data')}
          >
            <Settings size={18} className="text-red-500" /> Data
          </button>
        </nav>
      ) : (
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
      )}

      {/* Session Setup */}
      {showSession && (
        <section className="w-full">
          <button
            onClick={() => setShowSession(!showSession)}
            className="flex items-center justify-between w-full text font-semibold text-gray-700 mb-6 px-2 hover:text-blue-700 transition"
          >
            <span>Setup</span>
            {showSession ? <ChevronDown size={24} /> : <ChevronRight size={16} />}
          </button>
          <div className="bg-gray-200 rounded-2xl px-3 py-4 text-xs text-gray-700 space-y-4">
            <div className="space-y-4 mb-2">
              <input
                type="text"
                placeholder="A-Number"
                value={aNumber}
                onChange={e => setANumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-sm text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
              />
              <input
                type="text"
                placeholder="A-IMSI"
                value={aImsi}
                onChange={e => setAImsi(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-sm text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
              />
              <input
                type="text"
                placeholder="Rating Group"
                value={ratingGroup}
                onChange={e => setRatingGroup(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-sm text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
              />
            </div>
            <div className="pt-4">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 mb-4 hover:text-blue-700 transition"
              >
                Advanced Settings
                {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {showAdvanced && (
                <div className="space-y-3 transition-all duration-300 ease-in-out">
                  <input
                    type="text"
                    placeholder="3GPP-RAT-Type"
                    className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
                  />
                  <input
                    type="text"
                    placeholder="Rating-Group"
                    className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
                  />
                  <input
                    type="text"
                    placeholder="Service Identifier"
                    className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
                  />
                  <input
                    type="text"
                    placeholder="User-Equipment-IMEI"
                    className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
                  />
                  <input
                    type="text"
                    placeholder="Called-Station-ID"
                    className="w-full px-3 py-2 rounded-xl border border-gray-100 bg-gray-100 text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition shadow"
                  />
                  <button className="text-left text-xs text-blue-700 hover:underline mt-1">More &rsaquo;</button>
                </div>
              )}
            </div>
          </div>
          {/* Remove ChargingStatusCard from here */}
        </section>
      )}
      {!showSession && (
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
      )}

      {/* Footer (only show if session setup is expanded) */}
      {showSession && (
        <div className="mt-auto text-xs text-gray-400 px-2 pt-4">
          <p>v1.0.0 • ECEVS</p>
        </div>
      )}
    </div>
  )
}
