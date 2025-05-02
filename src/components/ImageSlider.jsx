

// import { useState, useEffect } from "react"


// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [slides.length])

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
//     setCurrentIndex(newIndex)
//   }

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1
//     const newIndex = isLastSlide ? 0 : currentIndex + 1
//     setCurrentIndex(newIndex)
//   }

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex)
//   }

//   return (
//     <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl">
//       {/* Slide transition */}
//       <div
//         className="h-full w-full transition-transform duration-500 ease-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)`, display: "flex" }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full h-full flex-shrink-0">
//             <img src={slide.imageUrl || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
//               <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
//               <p className="text-lg">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

     
      

//       {/* Dots/Indicators */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {slides.map((_, slideIndex) => (
//           <button
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`h-3 w-3 rounded-full transition-all ${
//               currentIndex === slideIndex ? "bg-white w-6" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${slideIndex + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ImageSlider

import { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl">
      {/* Slide container */}
      <div
        className="h-full w-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img 
              src={slide.imageUrl || "/placeholder.svg"} 
              alt={slide.title} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.target.src = "/placeholder.svg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots/Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 rounded-full transition-all ${
              currentIndex === slideIndex ? "bg-white w-6" : "bg-white/50 w-3"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;