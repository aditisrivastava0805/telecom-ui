import { CheckCircle2, XCircle } from 'lucide-react'

export default function ChargingStatusCard({ aNumber, aImsi, ratingGroup }) {
  const statusList = [
    { label: "A-Number", value: aNumber || "Not set", ok: !!aNumber },
    { label: "IMSI", value: aImsi || "Not set", ok: !!aImsi },
    { label: "Rating Group", value: ratingGroup || "Not set", ok: !!ratingGroup },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Status</h3>
      <ul className="space-y-2">
        {statusList.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between gap-2 text-base">
            <div className="flex items-center gap-2">
              {item.ok ? (
                <CheckCircle2 className="text-green-600" size={20} />
              ) : (
                <XCircle className="text-red-500" size={20} />
              )}
              <span className="font-semibold">{item.label}:</span>
            </div>
            <span className="text-gray-700 ml-1 min-w-[100px] text-right block">
              {item.ok ? item.value : <span className="italic">{item.value}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}