export default function Controls({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between transition-shadow hover:shadow-lg text-sm">
      <h3 className="text-base font-semibold text-gray-800 mb-4">{title}</h3>

      <div className="space-y-1 mb-4 text-gray-600">
        <p>A-Number: <span className="text-green-600 font-medium">Enabled</span></p>
        <p>IMSI: <span className="text-red-500 font-medium">Disabled</span></p>
        <p>Rating Group: <span className="text-green-600 font-medium">Enabled</span></p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-xl shadow-sm transition">
          Start
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-xl shadow-sm transition">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-xl shadow-sm transition">
          Stop
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-xl shadow-sm transition">
          Off
        </button>
      </div>
    </div>
  )
}