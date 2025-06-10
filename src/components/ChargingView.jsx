export default function ChargingView({ logs }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-sm space-y-4">
      <h3 className="text-base font-semibold text-gray-800 mb-1">Charging Interactions View</h3>
      <div className="space-y-3">
        {logs.length === 0 ? (
          <div className="text-gray-400">No interactions yet.</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="border-b border-gray-100 pb-2 last:border-none last:pb-0">
              <span className="text-xs text-gray-400 mr-2">[{log.time}]</span>
              <span className="font-medium text-gray-800">{log.message}</span>
              <span className="text-gray-600"> — {log.detail}</span>
              <span className="font-semibold text-blue-600">{log.value}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
