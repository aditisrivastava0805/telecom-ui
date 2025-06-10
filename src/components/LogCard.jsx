import { CheckCircle2, XCircle } from 'lucide-react'

function getIcon(message) {
  if (/started/i.test(message)) return <CheckCircle2 className="inline text-green-600 mr-1" size={18} />;
  if (/ended|fail|error|stopped/i.test(message)) return <XCircle className="inline text-red-500 mr-1" size={18} />;
  return null;
}

export default function LogCard({ title = "Recent Interactions", logs = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 items-start">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-base text-gray-700 space-y-2 max-h-56 overflow-y-auto w-full">
        {logs.length === 0 && <div className="text-gray-400">No interactions yet.</div>}
        {logs.map((log, idx) => (
          <div key={idx} className="flex items-center gap-2 w-full">
            <span className="text-gray-400 min-w-[90px] text-left font-mono">
              [{log.time}]
            </span>
            <span>
              {getIcon(log.message)}
              <span className="font-medium">{log.message}</span>
              {log.detail && <> — <span className="text-gray-500">{log.detail}</span></>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}