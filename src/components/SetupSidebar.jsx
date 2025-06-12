import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function SetupSidebar({
  showSession, setShowSession,
  aNumber, setANumber,
  aImsi, setAImsi,
  ratingGroup, setRatingGroup
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  if (!showSession) return null

  return (
    <div className="w-80 h-screen bg-gray-100 shadow-l flex flex-col p-5 transition-all duration-300">
      <button
        onClick={() => setShowSession(false)}
        className="flex items-center justify-between w-full text font-semibold text-gray-700 mb-6 px-2 hover:text-blue-700 transition"
      >
        <span>Setup</span>
        <ChevronDown size={24} />
      </button>
      <div className="bg-gray-100 rounded-2xl px-3 py-4 text-xs text-gray-700 space-y-4">
        <div className="space-y-4 mb-2">
          <input
            type="text"
            placeholder="A-Number"
            value={aNumber}
            onChange={e => setANumber(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
          <input
            type="text"
            placeholder="A-IMSI"
            value={aImsi}
            onChange={e => setAImsi(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
          <input
            type="text"
            placeholder="Rating Group"
            value={ratingGroup}
            onChange={e => setRatingGroup(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
        </div>
        <div className="pt-4">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-base font-semibold text-gray-700 mb-4 hover:text-blue-700 transition"
          >
            Advanced Settings
            {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {showAdvanced && (
            <div className="space-y-3 transition-all duration-300 ease-in-out">
              <input
                type="text"
                placeholder="3GPP-RAT-Type"
                className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Rating-Group"
                className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Service Identifier"
                className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="User-Equipment-IMEI"
                className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Called-Station-ID"
                className="w-full px-3 py-2 rounded-xl border border-white bg-white text-base text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
              />
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

