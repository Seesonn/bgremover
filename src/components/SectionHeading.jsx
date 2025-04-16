const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#016A70] to-[#A2C579] mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-[#016A70] max-w-3xl mx-auto">{subtitle}</p>
    </div>
  )
}

export default SectionHeading
