import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Home, FileText, Settings, Phone, MessageCircle, MessageCircleMore } from 'lucide-react'

export default function Sidebar({ service, setService }) {
  const [showAdvanced, setShowAdvanced] = useState(() => {
    const stored = localStorage.getItem('show-advanced')
    return stored === 'true'
  })

  useEffect(() => {
    localStorage.setItem('show-advanced', showAdvanced)
  }, [showAdvanced])

  return (
    <div className="p-5 w-96 h-screen overflow-y-auto bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-3xl flex flex-col space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 px-2">
        <div className="bg-blue-100 p-2 rounded-2xl">
          <svg width="24" height="24" fill="currentColor" className="text-blue-600">
            <path d="M5 3a1 1 0 0 0-1 1v16h2v-6h12v6h2V4a1 1 0 0 0-1-1H5zm1 8V5h12v6H6z" />
          </svg>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-gray-800">VxS Toolbox - ECEVS</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-3 text-sm font-semibold">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
            service === 'Voice'
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-white border-green-100 text-green-700 hover:bg-green-50'
          } transition`}
          onClick={() => setService('Voice')}
        >
          <Phone size={18} className="text-green-500" /> Voice
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
            service === 'SMS'
              ? 'bg-blue-50 border-blue-200 text-blue-700'
              : 'bg-white border-blue-100 text-blue-700 hover:bg-blue-50'
          } transition`}
          onClick={() => setService('SMS')}
        >
          <MessageCircleMore size={18} className="text-blue-500" /> SMS
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${
            service === 'Data'
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-white border-red-100 text-red-700 hover:bg-red-50'
          } transition`}
          onClick={() => setService('Data')}
        >
          <Settings size={18} className="text-red-500" /> Data
        </button>
      </nav>

      <hr className="my-3 border-t border-gray-200" />

      {/* Section Dropdown */}
      <section className="bg-white border border-blue-100 rounded-2xl px-5 py-6 text-sm text-gray-700 space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Select Configuration</label>
          <select className="w-full px-3 py-2 rounded-xl border border-blue-200 bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition">
            <option>Telecom Inputs</option>
          </select>
        </div>

        <div>
          <p className="font-bold text-gray-900 mb-1 text-base">SESSION SETUP</p>
          <p className="text-xs text-gray-400 mb-3 leading-snug">Configure your telecom service settings.</p>
          <div className="space-y-2">
            <input type="text" placeholder="A-Number" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
            <input type="text" placeholder="A-IMSI" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
          </div>
        </div>

        <div>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-xs font-semibold text-gray-700 mb-2 hover:text-blue-700 transition"
          >
            Advanced Settings
            {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {showAdvanced && (
            <div className="space-y-2 transition-all duration-300 ease-in-out">
              <input type="text" placeholder="3GPP-RAT-Type" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
              <input type="text" placeholder="Rating-Group" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
              <input type="text" placeholder="Service Identifier" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
              <input type="text" placeholder="User-Equipment-IMEI" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
              <input type="text" placeholder="Called-Station-ID" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" />
              <button className="text-left text-xs text-blue-700 hover:underline mt-1">More &rsaquo;</button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-auto text-xs text-gray-400 px-2 pt-4">
        <p>v1.0.0 • ECEVS</p>
      </div>
    </div>
  )
}
