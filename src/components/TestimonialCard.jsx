const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl relative">
      <div className="absolute -top-6 -right-6 text-[#016A70] text-8xl opacity-20">"</div>
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-xl text-[#016A70]">{testimonial.name}</h4>
          <p className="text-[#A2C579]">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-[#016A70]/80 mb-4">{testimonial.quote}</p>
      <div className="flex text-[#D2DE32]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
