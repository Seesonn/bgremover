import { Link } from "react-router-dom"

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-[#016A70] to-[#A2C579] rounded-3xl p-12 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Images?</h2>
      <p className="text-xl text-[#FFFFDD] mb-8 max-w-3xl mx-auto">
        Join thousands of professionals who trust our platform for perfect background removal every time.
      </p>
      <Link
        to="/templates"
        className="inline-block bg-[#FFFFDD] text-[#016A70] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Get Started Now
      </Link>
    </div>
  )
}

export default CTASection
