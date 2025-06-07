import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Home, FileText, Settings } from 'lucide-react'

export default function Sidebar() {
  const [showAdvanced, setShowAdvanced] = useState(() => {
    const stored = localStorage.getItem('show-advanced')
    return stored === 'true'
  })

  useEffect(() => {
    localStorage.setItem('show-advanced', showAdvanced)
  }, [showAdvanced])

  return (
    <div className="p-5 w-72 h-screen overflow-y-auto bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-3xl flex flex-col space-y-4">
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
      <nav className="space-y-2 text-sm text-gray-700 font-medium">
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-100 text-blue-900 shadow-inner">
          <Home size={16} /> Home
        </button>
        <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-xl transition">
          <FileText size={16} /> Reports
        </button>
        <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-xl transition">
          <Settings size={16} /> Settings
        </button>
      </nav>

      <hr className="my-3 border-t border-gray-200" />

      {/* Section Dropdown */}
      <section className="bg-blue-50 rounded-2xl px-4 py-5 text-sm text-gray-700 shadow-inner space-y-5">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium">Select Configuration</p>
          <select className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none">
            <option>Telecom Inputs</option>
          </select>
        </div>

        <div>
          <p className="font-bold text-gray-800 mb-1">SESSION SETUP</p>
          <p className="text-xs text-gray-500 mb-2 leading-snug">Configure your telecom service settings.</p>
          <input type="text" placeholder="A-Number" className="w-full px-3 py-2 mb-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
          <input type="text" placeholder="A-IMSI" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
        </div>

        <div>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 mb-2 hover:text-blue-700"
          >
            Advanced Settings
            {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {showAdvanced && (
            <div className="space-y-2 transition-all duration-300 ease-in-out">
              <input type="text" placeholder="3GPP-RAT-Type" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
              <input type="text" placeholder="Rating-Group" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
              <input type="text" placeholder="Service Identifier" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
              <input type="text" placeholder="User-Equipment-IMEI" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
              <input type="text" placeholder="Called-Station-ID" className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white" />
              <button className="text-left text-sm text-blue-700 hover:underline mt-1">More &rsaquo;</button>
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
