import { Link } from "react-router-dom"

const TemplateCard = ({ template, index }) => {
  return (
    <Link
      to={`/editor/${template.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-56 overflow-hidden relative">
        <img
          src={template.imageUrl || "/placeholder.svg"}
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#016A70]/80 via-[#016A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="bg-[#FFFFDD] text-[#016A70] font-bold py-2 px-4 rounded-lg">Select Template</button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#016A70] group-hover:text-[#A2C579] transition-colors">
          {template.name}
        </h3>
        <p className="text-[#016A70]/70 mt-2">{template.description}</p>
      </div>
    </Link>
  )
}

export default TemplateCard
