const StorySection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Our team at work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#016A70] mb-4">Our Story</h3>
          {/* <p className="text-[#016A70]/80 mb-4">
            BackgroundPro was founded in 2020 by a team of image processing experts and designers who were frustrated
            with the complexity and cost of professional background removal tools. We believed that everyone should have
            access to professional-grade image editing without needing years of experience or expensive software.
          </p>
          <p className="text-[#016A70]/80 mb-4">
            Our AI-powered technology has been trained on millions of images to deliver pixel-perfect results in
            seconds. What started as a simple tool has grown into a comprehensive platform used by thousands of
            professionals worldwide.
          </p>
          <p className="text-[#016A70]/80">
            Today, we're proud to serve customers ranging from individual creators to Fortune 500 companies, helping
            them create stunning visuals for their products, marketing materials, and social media content.
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default StorySection
