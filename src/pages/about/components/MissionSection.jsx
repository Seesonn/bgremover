import SectionHeading from "../../../components/SectionHeading"

const MissionSection = () => {
  const values = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Continuously improving our AI technology to deliver the best results possible.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Accessibility",
      description: "Making professional tools available to everyone, regardless of technical skill.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Community",
      description: "Building a supportive community of creators who inspire each other.",
    },
  ]

  return (
    <div className="mb-20">
      <SectionHeading
        title="Our Mission"
        subtitle="We're dedicated to making professional image editing accessible, fast, and affordable for everyone."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="w-16 h-16 bg-[#016A70] rounded-full flex items-center justify-center mx-auto mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-[#016A70] mb-2">{value.title}</h3>
            <p className="text-[#016A70]/70">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MissionSection
