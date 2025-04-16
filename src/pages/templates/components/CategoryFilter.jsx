

const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === category.id
              ? "bg-[#016A70] text-white shadow-md"
              : "bg-[#FFFFDD] text-[#016A70] hover:bg-[#FFFFDD]/70"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
