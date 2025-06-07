import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function Sidebar() {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <div className="p-4 w-72 h-screen bg-white shadow-md rounded-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-100 p-2 rounded-xl">
          <svg width="24" height="24" fill="currentColor" className="text-blue-600">
            <path d="M5 3a1 1 0 0 0-1 1v16h2v-6h12v6h2V4a1 1 0 0 0-1-1H5zm1 8V5h12v6H6z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold">VxS Toolbox - ECEVS</h1>
      </div>

      {/* Navigation */}
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-900">
          <span>🏠</span> Home
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-xl">
          <span>📄</span> Reports
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-xl">
          <span>⚙️</span> Settings
        </button>
      </div>

      {/* Section Dropdown */}
      <div className="bg-blue-50 rounded-xl p-3 text-sm text-gray-700">
        <select className="w-full mb-4 px-3 py-2 rounded-xl text-sm border border-gray-300">
          <option>Telecom Inputs</option>
        </select>

        <div className="mb-4">
          <p className="font-semibold mb-1">Session Setup</p>
          <p className="text-xs text-gray-500 mb-2">Configure your telecom service settings.</p>
          <input type="text" placeholder="A-Number" className="w-full px-3 py-2 mb-2 rounded-xl text-sm border border-gray-300" />
          <input type="text" placeholder="A-IMSI" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
        </div>

        <div>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 mb-2"
          >
            Advanced Settings
            {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {showAdvanced && (
            <div className="space-y-2">
              <input type="text" placeholder="3GPP-RAT-Type" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
              <input type="text" placeholder="Rating-Group" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
              <input type="text" placeholder="Service Identifier" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
              <input type="text" placeholder="User-Equipment-IMEI" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
              <input type="text" placeholder="Called-Station-ID" className="w-full px-3 py-2 rounded-xl text-sm border border-gray-300" />
              <button className="text-left text-sm text-blue-700 hover:underline">More &rsaquo;</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
