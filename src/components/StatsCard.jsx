export default function StatsCard({ title, value, subtitle, type }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      {/* Placeholder for future chart type */}
      {type !== 'summary' && (
        <div className="mt-4 h-20 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
          {type === 'line' ? 'Line Chart' : 'Bar Chart'}
        </div>
      )}
    </div>
  )
}
