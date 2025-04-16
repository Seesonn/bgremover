
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const TemplateGrid = ({ templates, viewMode }) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-[#016A70]/30 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-[#016A70]">No templates found</h3>
        <p className="text-[#016A70]/70 mt-2">Try a different search term or category</p>
      </div>
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (viewMode === "grid") {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {templates.map((template) => (
          <motion.div key={template.id} variants={item}>
            <Link
              to={`/editor/${template.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 block h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={template.imageUrl || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#016A70]/80 via-[#016A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="bg-[#FFFFDD] text-[#016A70] font-bold py-2 px-4 rounded-lg">
                    Select Template
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#016A70] group-hover:text-[#A2C579] transition-colors">
                    {template.name}
                  </h3>
                  <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
                    {template.name.includes("Office")
                      ? "Office"
                      : template.name.includes("Nature")
                        ? "Nature"
                        : template.name.includes("Abstract")
                          ? "Abstract"
                          : template.name.includes("City")
                            ? "Urban"
                            : "Other"}
                  </span>
                </div>
                <p className="text-[#016A70]/70 mt-2">{template.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
      {templates.map((template) => (
        <motion.div key={template.id} variants={item}>
          <Link
            to={`/editor/${template.id}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100 block"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto overflow-hidden relative">
                <img
                  src={template.imageUrl || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#016A70]/80 via-[#016A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:bg-gradient-to-r"></div>
              </div>
              <div className="p-6 md:w-3/4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#016A70] group-hover:text-[#A2C579] transition-colors">
                      {template.name}
                    </h3>
                    <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
                      {template.name.includes("Office")
                        ? "Office"
                        : template.name.includes("Nature")
                          ? "Nature"
                          : template.name.includes("Abstract")
                            ? "Abstract"
                            : template.name.includes("City")
                              ? "Urban"
                              : "Other"}
                    </span>
                  </div>
                  <p className="text-[#016A70]/70 mt-2">{template.description}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-[#016A70] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#016A70]/90 transition-colors">
                    Select Template
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TemplateGrid
