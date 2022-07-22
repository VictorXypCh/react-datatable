export default function DataTableSearch({onChange}) {
  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            Search
        </span>
        <input
          className="flex-1 min-w-0 block  px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          placeholder="..."
            onChange={onChange}
        />
      </div>
    </div>
  )
}

