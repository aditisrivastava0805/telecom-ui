export default function StatsCard({ title, value, subtitle, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between transition-shadow hover:shadow-lg">
      <div>
        <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      </div>

      {type !== 'summary' && (
        <div className="mt-4 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
          {type === 'line' ? 'Line Chart' : 'Bar Chart'}
        </div>
      )}
    </div>
  )
}
