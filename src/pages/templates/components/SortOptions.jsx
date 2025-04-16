

const SortOptions = ({ selected, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="text-sm font-medium text-[#016A70] mr-2">Sort by:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-[#A2C579]/30 rounded-lg text-[#016A70] focus:outline-none focus:ring-2 focus:ring-[#016A70]"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="nameAsc">Name (A-Z)</option>
        <option value="nameDesc">Name (Z-A)</option>
      </select>
    </div>
  )
}

export default SortOptions
