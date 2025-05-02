import SectionHeading from "../../../components/SectionHeading"

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Image",
      description:
        "Simply drag and drop your image or click to upload. We support JPG, PNG, and WebP formats up to 10MB.",
    },
    {
      number: 2,
      title: "Remove Background",
      description:
        "Our System instantly analyzes your image and removes the background with precision, even around complex edges.",
    },
    {
      number: 3,
      title: "Download & Use",
      description:
        "Position your image on a template, adjust as needed, and download the final result in high resolution.",
    },
  ]

  return (
    <div id="how-it-works" className="py-10">
      <SectionHeading
        title="How It Works"
        subtitle="Our  technology makes background removal simple and accurate in just three easy steps."
      />

      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#016A70] to-[#A2C579] transform -translate-y-1/2 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-xl p-8 relative z-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-r from-[#016A70] to-[#A2C579] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-[#016A70]">{step.title}</h3>
              <p className="text-[#016A70]/80 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
