
// // import { Link } from "react-router-dom"
// // import { motion } from "framer-motion"

// // const TemplateGrid = ({ templates, viewMode }) => {
// //   if (templates.length === 0) {
// //     return (
// //       <div className="text-center py-12">
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="h-16 w-16 mx-auto text-[#016A70]/30 mb-4"
// //           fill="none"
// //           viewBox="0 0 24 24"
// //           stroke="currentColor"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth={2}
// //             d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //           />
// //         </svg>
// //         <h3 className="text-xl font-bold text-[#016A70]">No templates found</h3>
// //         <p className="text-[#016A70]/70 mt-2">Try a different search term or category</p>
// //       </div>
// //     )
// //   }

// //   const container = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   }

// //   const item = {
// //     hidden: { opacity: 0, y: 20 },
// //     show: { opacity: 1, y: 0 },
// //   }

// //   if (viewMode === "grid") {
// //     return (
// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         animate="show"
// //         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
// //       >
// //         {templates.map((template) => (
// //           <motion.div key={template.id} variants={item}>
// //             <Link
// //               to={`/editor/${template.id}`}
// //               className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 block h-full"
// //             >
// //               <div className="h-56 overflow-hidden relative">
// //                 <img
// //                   src={template.imageUrl || "/placeholder.svg"}
// //                   alt={template.name}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#016A70]/80 via-[#016A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
// //                   <button className="bg-[#FFFFDD] text-[#016A70] font-bold py-2 px-4 rounded-lg">
// //                     Select Template
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="p-6">
// //                 <div className="flex justify-between items-start mb-2">
// //                   <h3 className="text-xl font-bold text-[#016A70] group-hover:text-[#A2C579] transition-colors">
// //                     {template.name}
// //                   </h3>
// //                   {/* <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
// //                     {template.name.includes("Event")
// //                       ? "Event"
// //                       : template.name.includes("Nature")
// //                         ? "Nature"
// //                         : template.name.includes("Abstract")
// //                           ? "Abstract"
// //                           : template.name.includes("City")
// //                             ? "Urban"
// //                             : "Other"}
// //                   </span> */}
// //                 </div>
// //                 <p className="text-[#016A70]/70 mt-2">{template.description}</p>
// //               </div>
// //             </Link>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     )
// //   }

// //   return (
// //     <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
// //       {templates.map((template) => (
// //         <motion.div key={template.id} variants={item}>
// //           <Link
// //             to={`/editor/${template.id}`}
// //             className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100 block"
// //           >
// //             <div className="flex flex-col md:flex-row">
// //               <div className="md:w-1/4 h-48 md:h-auto overflow-hidden relative">
// //                 <img
// //                   src={template.imageUrl || "/placeholder.svg"}
// //                   alt={template.name}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#016A70]/80 via-[#016A70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:bg-gradient-to-r"></div>
// //               </div>
// //               <div className="p-6 md:w-3/4 flex flex-col justify-between">
// //                 <div>
// //                   <div className="flex justify-between items-start mb-2">
// //                     <h3 className="text-xl font-bold text-[#016A70] group-hover:text-[#A2C579] transition-colors">
// //                       {template.name}
// //                     </h3>
// //                     <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
// //                       {template.name.includes("Office")
// //                         ? "Office"
// //                         : template.name.includes("Nature")
// //                           ? "Nature"
// //                           : template.name.includes("Abstract")
// //                             ? "Abstract"
// //                             : template.name.includes("City")
// //                               ? "Urban"
// //                               : "Other"}
// //                     </span>
// //                   </div>
// //                   <p className="text-[#016A70]/70 mt-2">{template.description}</p>
// //                 </div>
// //                 <div className="mt-4 flex justify-end">
// //                   <button className="bg-[#016A70] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#016A70]/90 transition-colors">
// //                     Select Template
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </Link>
// //         </motion.div>
// //       ))}
// //     </motion.div>
// //   )
// // }

// // export default TemplateGrid



// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const TemplateGrid = ({ templates, viewMode }) => {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [loadedImages, setLoadedImages] = useState({});
//   const [isTouchDevice, setIsTouchDevice] = useState(false);

//   // Detect touch devices
//   useEffect(() => {
//     const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//     setIsTouchDevice(touchDevice);
//   }, []);

//   // Handle image loading
//   const handleImageLoad = (id) => {
//     setLoadedImages(prev => ({ ...prev, [id]: true }));
//   };

//   if (templates.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-16 w-16 mx-auto text-[#016A70]/30 mb-4"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//         <h3 className="text-xl font-bold text-[#016A70]">No templates found</h3>
//         <p className="text-[#016A70]/70 mt-2">Try a different search term or category</p>
//       </div>
//     );
//   }

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20
//       }
//     },
//   };

//   const overlay = {
//     hidden: { y: "100%" },
//     show: { 
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 30
//       }
//     },
//     exit: { 
//       y: "100%",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//         delay: 0.1
//       }
//     }
//   };

//   const detailsVariant = {
//     hidden: { opacity: 0, y: 10 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         delay: 0.1,
//         duration: 0.2
//       }
//     },
//     exit: { 
//       opacity: 0,
//       y: 10,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const buttonVariant = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: { 
//       opacity: 1, 
//       scale: 1,
//       transition: {
//         delay: 0.2,
//         type: "spring",
//         stiffness: 400,
//         damping: 20
//       }
//     },
//     exit: { 
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const getCategory = (name) => {
//     if (name.includes("Event")) return "Office";
//     if (name.includes("Birthday")) return "Birthday";
//     if (name.includes("Abstract")) return "Abstract";
//     if (name.includes("City")) return "Urban";
//     return "Other";
//   };

//   if (viewMode === "grid") {
//     return (
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
//       >
//         {templates.map((template) => (
//           <motion.div
//             key={template.id}
//             variants={item}
//             className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             style={{ aspectRatio: "1/1" }}
//             onMouseEnter={() => !isTouchDevice && setHoveredId(template.id)}
//             onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
//             onClick={() => isTouchDevice && setHoveredId(hoveredId === template.id ? null : template.id)}
//           >
//             <Link 
//               to={`/editor/${template.id}`} 
//               className="block h-full w-full"
//               aria-label={`Select ${template.name} template`}
//             >
//               {/* Shimmer loading effect */}
//               {!loadedImages[template.id] && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />
//               )}
              
//               {/* Image */}
//               <div className="h-full w-full overflow-hidden">
//                 <img
//                   src={template.imageUrl || "/placeholder.svg"}
//                   alt={template.name}
//                   className={`w-full h-full object-cover transition-transform duration-700 ${hoveredId === template.id ? 'scale-110' : 'scale-100'}`}
//                   loading="lazy"
//                   onLoad={() => handleImageLoad(template.id)}
//                 />
//               </div>

//               {/* Hover overlay with details */}
//               <AnimatePresence>
//                 {hoveredId === template.id && (
//                   <motion.div
//                     className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#016A70] to-[#016A70]/90 backdrop-blur-sm"
//                     variants={overlay}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                   >
//                     <div className="p-4 text-white">
//                       <motion.div variants={detailsVariant}>
//                         <div className="flex justify-between items-start mb-2">
//                           <h3 className="text-xl font-bold">{template.name}</h3>
//                           <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
//                             {getCategory(template.name)}
//                           </span>
//                         </div>
//                         <p className="text-white/90 text-sm mt-1 line-clamp-2">{template.description}</p>
//                       </motion.div>
                      
//                       <motion.div className="mt-3 flex justify-end" variants={buttonVariant}>
//                         <button 
//                           className="bg-[#FFFFDD] text-[#016A70] font-bold py-2 px-5 rounded-lg hover:bg-white transition-colors duration-300 flex items-center gap-1"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             // Handle button click
//                           }}
//                         >
//                           <span>Select</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>
//     );
//   }

//   // List view
//   return (
//     <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">
//       {templates.map((template) => (
//         <motion.div
//           key={template.id}
//           variants={item}
//           className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           onMouseEnter={() => !isTouchDevice && setHoveredId(template.id)}
//           onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
//           onClick={() => isTouchDevice && setHoveredId(hoveredId === template.id ? null : template.id)}
//         >
//           <Link 
//             to={`/editor/${template.id}`} 
//             className="block"
//             aria-label={`Select ${template.name} template`}
//           >
//             <div className="flex flex-col md:flex-row">
//               {/* Image container */}
//               <div className="md:w-1/3 lg:w-1/4 h-48 md:h-56 relative overflow-hidden">
//                 {/* Shimmer loading effect */}
//                 {!loadedImages[template.id] && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />
//                 )}
                
//                 {/* Image */}
//                 <img
//                   src={template.imageUrl || "/placeholder.svg"}
//                   alt={template.name}
//                   className={`w-full h-full object-cover transition-transform duration-700 ${hoveredId === template.id ? 'scale-110' : 'scale-100'}`}
//                   loading="lazy"
//                   onLoad={() => handleImageLoad(template.id)}
//                 />

//                 {/* Mobile overlay */}
//                 <AnimatePresence>
//                   {hoveredId === template.id && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#016A70] to-[#016A70]/90 backdrop-blur-sm md:hidden"
//                       variants={overlay}
//                       initial="hidden"
//                       animate="show"
//                       exit="exit"
//                     >
//                       <div className="p-4 text-white">
//                         <motion.h3 
//                           className="text-lg font-bold truncate"
//                           variants={detailsVariant}
//                         >
//                           {template.name}
//                         </motion.h3>
//                         <motion.div className="mt-2" variants={buttonVariant}>
//                           <button className="bg-[#FFFFDD] text-[#016A70] font-bold py-1.5 px-4 rounded-lg text-sm">
//                             View Details
//                           </button>
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Desktop details overlay */}
//               <AnimatePresence>
//                 {hoveredId === template.id && (
//                   <motion.div
//                     className="hidden md:block absolute top-0 bottom-0 left-1/3 lg:left-1/4 right-0 bg-white"
//                     initial={{ x: "100%" }}
//                     animate={{ 
//                       x: 0,
//                       transition: {
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 30
//                       }
//                     }}
//                     exit={{ 
//                       x: "100%",
//                       transition: {
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 30
//                       }
//                     }}
//                   >
//                     <div className="h-full p-6 flex flex-col justify-between">
//                       <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ 
//                           opacity: 1, 
//                           x: 0,
//                           transition: { delay: 0.1, duration: 0.3 }
//                         }}
//                         exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
//                       >
//                         <div className="flex justify-between items-start mb-3">
//                           <h3 className="text-xl font-bold text-[#016A70]">{template.name}</h3>
//                           <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
//                             {getCategory(template.name)}
//                           </span>
//                         </div>
//                         <p className="text-[#016A70]/70 mt-2">{template.description}</p>
//                       </motion.div>
                      
//                       <motion.div 
//                         className="mt-4 flex justify-end"
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ 
//                           opacity: 1, 
//                           y: 0,
//                           transition: { delay: 0.2, duration: 0.3 }
//                         }}
//                         exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
//                       >
//                         <button className="bg-[#016A70] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#016A70]/90 transition-colors flex items-center gap-1">
//                           <span>Select Template</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </Link>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default TemplateGrid;


import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const TemplateGrid = ({ templates, viewMode, category = "All" }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect touch devices
  useEffect(() => {
    const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(touchDevice)
  }, [])

  // Filter templates by category
  const filteredTemplates =
    category === "All" ? templates : templates.filter((template) => template.category === category)

  if (filteredTemplates.length === 0) {
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
        <p className="text-[#016A70]/70 mt-2">Try a different category</p>
      </div>
    )
  }

  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ aspectRatio: "1/1" }}
            onMouseEnter={() => !isTouchDevice && setHoveredId(template.id)}
            onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
            onClick={() => isTouchDevice && setHoveredId(hoveredId === template.id ? null : template.id)}
          >
            <Link
              to={`/editor/${template.id}`}
              className="block h-full w-full"
              aria-label={`Select ${template.name} template`}
            >
              {/* Image */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src={template.imageUrl || "/placeholder.svg"}
                  alt={template.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredId === template.id ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with details */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-[#016A70] transform transition-transform duration-300 ease-out ${
                  hoveredId === template.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="p-4 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{template.name}</h3>
                    <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mt-1 line-clamp-2">{template.description}</p>
                  <div className="mt-3 flex justify-end">
                    <button
                      className="bg-[#FFFFDD] text-[#016A70] font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        // Handle button click
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
  }

  // List view
  return (
    <div className="space-y-4">
      {filteredTemplates.map((template) => (
        <div
          key={template.id}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          onMouseEnter={() => !isTouchDevice && setHoveredId(template.id)}
          onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
          onClick={() => isTouchDevice && setHoveredId(hoveredId === template.id ? null : template.id)}
        >
          <Link to={`/editor/${template.id}`} className="block" aria-label={`Select ${template.name} template`}>
            <div className="flex flex-col md:flex-row">
              {/* Image container */}
              <div className="md:w-1/3 lg:w-1/4 h-48 md:h-56 relative overflow-hidden">
                {/* Image */}
                <img
                  src={template.imageUrl || "/placeholder.svg"}
                  alt={template.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredId === template.id ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />

                {/* Mobile overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-[#016A70] transform transition-transform duration-300 ease-out md:hidden ${
                    hoveredId === template.id ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold truncate">{template.name}</h3>
                    <div className="mt-2">
                      <button className="bg-[#FFFFDD] text-[#016A70] font-bold py-1.5 px-4 rounded-lg text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop details overlay */}
              <div
                className={`hidden md:block absolute top-0 bottom-0 left-1/3 lg:left-1/4 right-0 bg-white transform transition-transform duration-300 ease-out ${
                  hoveredId === template.id ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[#016A70]">{template.name}</h3>
                      <span className="bg-[#FFFFDD] text-[#016A70] text-xs font-medium px-2 py-1 rounded-full">
                        {template.category}
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
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TemplateGrid
