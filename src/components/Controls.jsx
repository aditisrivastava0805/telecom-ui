export default function Controls({ title }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm text-gray-600 mb-4">
        <p>A-Number: Enabled</p>
        <p>IMSI: Disabled</p>
        <p>Rating Group: Enabled</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button className="bg-green-500 text-white px-4 py-1 rounded">Start</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Update</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded">Stop</button>
        <button className="bg-gray-500 text-white px-4 py-1 rounded">Off</button>
      </div>
    </div>
  )
}
