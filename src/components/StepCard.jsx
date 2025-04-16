const StepCard = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-[#016A70] to-[#A2C579] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-center mb-4 text-[#016A70]">{title}</h3>
      <p className="text-[#016A70]/80 text-center">{description}</p>
    </div>
  )
}

export default StepCard
