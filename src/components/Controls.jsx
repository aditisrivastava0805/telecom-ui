import { Phone, MessageCircleMore, Settings } from 'lucide-react'

export default function Controls({ title, service, addLog }) {
  let buttons
  if (service === 'Voice') {
    buttons = (
      <>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-green-200 bg-green-50 text-green-700 font-bold text-sm transition"
          onClick={() => addLog('Voice session started', 'A-Number:', '1234567890')}
        >
          <Phone size={16} className="text-green-500" /> Voice
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-green-200 bg-green-50 text-green-700 font-bold text-sm transition"
          onClick={() => addLog('Session ended', 'Duration:', '11 mins')}
        >
          <Phone size={16} className="text-green-500" /> End Call
        </button>
      </>
    )
  } else if (service === 'SMS') {
    buttons = (
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-blue-200 bg-blue-50 text-blue-700 font-bold text-sm transition"
        onClick={() => addLog('SMS sent', 'To:', '9876543210')}
      >
        <MessageCircleMore size={16} className="text-blue-500" /> SMS
      </button>
    )
  } else if (service === 'Data') {
    buttons = (
      <>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-yellow-200 bg-yellow-50 text-yellow-700 font-bold text-sm transition"
          onClick={() => addLog('Data session started', 'Charging Key:', '54321')}
        >
          <Settings size={16} className="text-yellow-500" /> Start Charging
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-gray-300 bg-gray-50 text-gray-700 font-bold text-sm transition"
          onClick={() => addLog('Charging session ended', 'Duration:', '5 mins')}
        >
          <Settings size={16} className="text-gray-500" /> End Charging
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-blue-200 bg-blue-50 text-blue-700 font-bold text-sm transition"
          onClick={() => addLog('Policy session started', 'Policy:', 'Policy-1')}
        >
          <Settings size={16} className="text-blue-500" /> Start Policy
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-pink-200 bg-pink-50 text-pink-700 font-bold text-sm transition"
          onClick={() => addLog('Policy session ended', 'Policy:', 'Policy-1')}
        >
          <Settings size={16} className="text-pink-500" /> End Policy
        </button>
      </>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between transition-shadow hover:shadow-lg text-sm">
      <h3 className="text-base font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-1 mb-4 text-gray-600">
        <p>A-Number: <span className="text-green-600 font-medium">Enabled</span></p>
        <p>IMSI: <span className="text-red-500 font-medium">Disabled</span></p>
        <p>Rating Group: <span className="text-green-600 font-medium">Enabled</span></p>
      </div>
      <div className="flex flex-wrap gap-2">
        {buttons}
      </div>
    </div>
  )
}
