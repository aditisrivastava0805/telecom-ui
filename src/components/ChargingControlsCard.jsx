import { Phone, MessageCircleMore, Settings } from 'lucide-react'

export default function ChargingControlsCard({ service, addLog }) {
  let buttons
  if (service === 'Voice') {
    buttons = (
      <>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 font-semibold text-base transition hover:bg-green-100 hover:border-green-300 hover:shadow"
          onClick={() => addLog('Voice session started', 'A-Number:', '1234567890')}
        >
          <Phone size={18} className="text-green-500" /> Voice
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-red-200 bg-red-50 text-red-700 font-semibold text-base transition hover:bg-red-100 hover:border-red-400 hover:shadow"
          onClick={() => addLog('Session ended', 'Duration:', '11 mins')}
        >
          <Phone size={18} className="text-red-500" /> End Call
        </button>
      </>
    )
  } else if (service === 'SMS') {
    buttons = (
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-blue-200 bg-blue-50 text-blue-700 font-semibold text-base transition hover:bg-blue-100 hover:border-blue-300 hover:shadow"
        onClick={() => addLog('SMS sent', 'To:', '9876543210')}
      >
        <MessageCircleMore size={18} className="text-blue-500" /> SMS
      </button>
    )
  } else if (service === 'Data') {
    buttons = (
      <>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 font-semibold text-base transition hover:bg-green-100 hover:border-green-300 hover:shadow"
          onClick={() => addLog('Data session started', 'Charging Key:', '54321')}
        >
          <Settings size={18} className="text-green-500" /> Start Charging
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-red-300 bg-red-50 text-red-700 font-semibold text-base transition hover:bg-red-100 hover:border-red-400 hover:shadow"
          onClick={() => addLog('Charging session ended', 'Duration:', '5 mins')}
        >
          <Settings size={18} className="text-red-500" /> End Charging
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-blue-200 bg-blue-50 text-blue-700 font-semibold text-base transition hover:bg-blue-100 hover:border-blue-300 hover:shadow"
          onClick={() => addLog('Policy session started', 'Policy:', 'Policy-1')}
        >
          <Settings size={18} className="text-blue-500" /> Start Policy
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-pink-50 text-pink-700 font-semibold text-base transition hover:bg-pink-100 hover:border-pink-300 hover:shadow"
          onClick={() => addLog('Policy session ended', 'Policy:', 'Policy-1')}
        >
          <Settings size={18} className="text-pink-500" /> End Policy
        </button>
      </>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-4 flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Charging Card</h3>
      <div className="flex flex-wrap gap-3">{buttons}</div>
    </div>
  )
}