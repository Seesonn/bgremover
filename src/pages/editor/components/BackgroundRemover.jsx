

// // // import { useState, useRef, useEffect } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { templates } from "../../../data/templates"
// // // import ImageUploader from "./ImageUploader"
// // // import DraggableImage from "./DraggableImage"
// // // import DownloadButton from "./DownloadButton"
// // // import ImageControls from "./ImageControls"

// // // const BackgroundRemover = ({ templateId }) => {
// // //   const navigate = useNavigate()
// // //   const [template, setTemplate] = useState(null)
// // //   const [uploadedImage, setUploadedImage] = useState(null)
// // //   const [processedImage, setProcessedImage] = useState(null)
// // //   const [isProcessing, setIsProcessing] = useState(false)
// // //   const [error, setError] = useState(null)
// // //   const [position, setPosition] = useState({ x: 0, y: 0 })
// // //   const [scale, setScale] = useState(1)
// // //   const [rotation, setRotation] = useState(0)
// // //   const [autoFit, setAutoFit] = useState(true) // New state for auto-fitting
// // //   const canvasRef = useRef(null)
// // //   const previewContainerRef = useRef(null)
// // //   const imgElementRef = useRef(null)
// // //   // Add a new state to track the preview dimensions
// // //   const [previewDimensions, setPreviewDimensions] = useState({ width: 0, height: 0 })
// // //   // Track the natural dimensions of the image
// // //   const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

// // //   // Find the selected template
// // //   useEffect(() => {
// // //     const foundTemplate = templates.find((t) => t.id === Number.parseInt(templateId))
// // //     if (foundTemplate) {
// // //       setTemplate(foundTemplate)
// // //     } else {
// // //       navigate("/templates")
// // //     }
// // //   }, [templateId, navigate])

// // //   // Auto-fit the image when it's first processed
// // //   useEffect(() => {
// // //     if (processedImage && previewContainerRef.current && imageDimensions.width > 0) {
// // //       fitImageToContainer()
// // //     }
// // //   }, [processedImage, imageDimensions])

// // //   // Update the useEffect that handles resizing to capture the preview dimensions
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (previewContainerRef.current) {
// // //         const container = previewContainerRef.current
// // //         const containerRect = container.getBoundingClientRect()

// // //         // Store the current dimensions for download reference
// // //         setPreviewDimensions({
// // //           width: containerRect.width,
// // //           height: containerRect.height,
// // //         })

// // //         // If auto-fit is enabled, resize the image to fit the container
// // //         if (autoFit && processedImage && imageDimensions.width > 0) {
// // //           fitImageToContainer()
// // //         }
// // //       }
// // //     }

// // //     // Call once on mount and when processed image changes
// // //     handleResize()

// // //     window.addEventListener("resize", handleResize)
// // //     return () => window.removeEventListener("resize", handleResize)
// // //   }, [processedImage, autoFit, imageDimensions])

// // //   const handleImageUpload = (file) => {
// // //     setUploadedImage(file)
// // //     setProcessedImage(null)
// // //     setError(null)
// // //     // Reset position, scale and rotation when uploading a new image
// // //     setPosition({ x: 0, y: 0 })
// // //     setScale(1)
// // //     setRotation(0)
// // //     setImageDimensions({ width: 0, height: 0 })
// // //   }

// // //   const removeBackground = async () => {
// // //     if (!uploadedImage) return

// // //     setIsProcessing(true)
// // //     setError(null)

// // //     try {
// // //       // Create form data for the API request
// // //       const formData = new FormData()
// // //       formData.append("image_file", uploadedImage)

// // //       // This is where you would normally make the API call to RemoveBG
// // //       // For now, we'll simulate the API call with a timeout
// // //       // Replace this with actual API call when you have the API key

// // //       setTimeout(() => {
// // //         // Create a URL for the uploaded image (simulating processed image)
// // //         // In a real implementation, this would be the response from the API
// // //         const imageUrl = URL.createObjectURL(uploadedImage)
// // //         setProcessedImage(imageUrl)

// // //         // Load the image to get its natural dimensions
// // //         const img = new Image()
// // //         img.onload = () => {
// // //           setImageDimensions({
// // //             width: img.naturalWidth,
// // //             height: img.naturalHeight,
// // //           })
// // //         }
// // //         img.src = imageUrl

// // //         setIsProcessing(false)
// // //       }, 2000)

// // //       /* 
// // //       // Uncomment this code when you have the API key
// // //       const response = await fetch('https://api.remove.bg/v1.0/removebg', {
// // //         method: 'POST',
// // //         headers: {
// // //           'X-Api-Key': 'YOUR_API_KEY_HERE',
// // //         },
// // //         body: formData,
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error('Failed to remove background');
// // //       }

// // //       const blob = await response.blob();
// // //       const imageUrl = URL.createObjectURL(blob);
// // //       setProcessedImage(imageUrl);
      
// // //       // Load the image to get its natural dimensions
// // //       const img = new Image()
// // //       img.onload = () => {
// // //         setImageDimensions({
// // //           width: img.naturalWidth,
// // //           height: img.naturalHeight
// // //         })
// // //       }
// // //       img.src = imageUrl
// // //       */
// // //     } catch (err) {
// // //       setError("Error removing background. Please try again.")
// // //       console.error(err)
// // //     } finally {
// // //       setIsProcessing(false)
// // //     }
// // //   }

// // //   // Function to fit the image to the container
// // //   const fitImageToContainer = () => {
// // //     if (!previewContainerRef.current || imageDimensions.width === 0) return

// // //     const container = previewContainerRef.current
// // //     const containerRect = container.getBoundingClientRect()

// // //     // Calculate the scale needed to fit the image within the container
// // //     // Leave some padding (20px on each side)
// // //     const padding = 40
// // //     const containerWidth = containerRect.width - padding
// // //     const containerHeight = containerRect.height - padding

// // //     // Calculate the scale needed to fit the image within the container
// // //     const widthScale = containerWidth / imageDimensions.width
// // //     const heightScale = containerHeight / imageDimensions.height

// // //     // Use the smaller scale to ensure the image fits completely
// // //     const newScale = Math.min(widthScale, heightScale)

// // //     // Set the new scale
// // //     setScale(newScale)

// // //     // Center the image in the container
// // //     setPosition({
// // //       x: (containerRect.width - imageDimensions.width * newScale) / 2,
// // //       y: (containerRect.height - imageDimensions.height * newScale) / 2,
// // //     })
// // //   }

// // //   // Update the handlePositionChange function to allow free movement
// // //   const handlePositionChange = (newPosition) => {
// // //     // No bounds checking - allow free movement anywhere in the template
// // //     setPosition(newPosition)
// // //   }

// // //   const handleScaleChange = (newScale) => {
// // //     setScale(newScale)
// // //     // When scale changes, update position to keep the image centered
// // //     if (previewContainerRef.current && imageDimensions.width > 0) {
// // //       const container = previewContainerRef.current
// // //       const containerRect = container.getBoundingClientRect()

// // //       // Only center if auto-fit is enabled
// // //       if (autoFit) {
// // //         setPosition({
// // //           x: (containerRect.width - imageDimensions.width * newScale) / 2,
// // //           y: (containerRect.height - imageDimensions.height * newScale) / 2,
// // //         })
// // //       }
// // //     }
// // //   }

// // //   const handleRotationChange = (newRotation) => {
// // //     setRotation(newRotation)
// // //   }

// // //   const toggleAutoFit = () => {
// // //     const newAutoFit = !autoFit
// // //     setAutoFit(newAutoFit)

// // //     // If turning auto-fit on, fit the image to the container
// // //     if (newAutoFit && processedImage) {
// // //       fitImageToContainer()
// // //     }
// // //   }

// // //   return (
// // //     <div className="space-y-8">
// // //       <div className="text-center">
// // //         <h1 className="text-4xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
// // //           Background Remover Studio
// // //         </h1>
// // //         <p className="text-[#016A70] max-w-2xl mx-auto">
// // //           Upload your image, remove the background, and position it anywhere on the template.
// // //         </p>
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //         <div className="lg:col-span-1 space-y-6">
// // //           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// // //             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 className="h-5 w-5 mr-2 text-[#A2C579]"
// // //                 fill="none"
// // //                 viewBox="0 0 24 24"
// // //                 stroke="currentColor"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
// // //                 />
// // //               </svg>
// // //               Upload Image
// // //             </h2>
// // //             <ImageUploader onImageUpload={handleImageUpload} />

// // //             {uploadedImage && (
// // //               <button
// // //                 onClick={removeBackground}
// // //                 disabled={isProcessing}
// // //                 className="w-full mt-4 bg-gradient-to-r from-[#016A70] to-[#A2C579] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
// // //               >
// // //                 {isProcessing ? (
// // //                   <>
// // //                     <svg
// // //                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <circle
// // //                         className="opacity-25"
// // //                         cx="12"
// // //                         cy="12"
// // //                         r="10"
// // //                         stroke="currentColor"
// // //                         strokeWidth="4"
// // //                       ></circle>
// // //                       <path
// // //                         className="opacity-75"
// // //                         fill="currentColor"
// // //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                       ></path>
// // //                     </svg>
// // //                     Processing...
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <svg
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       className="h-5 w-5 mr-2"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                       stroke="currentColor"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M19 14l-7 7m0 0l-7-7m7 7V3"
// // //                       />
// // //                     </svg>
// // //                     Remove Background
// // //                   </>
// // //                 )}
// // //               </button>
// // //             )}

// // //             {error && (
// // //               <div className="mt-4 bg-red-50 text-red-500 p-3 rounded-lg text-sm flex items-center">
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-5 w-5 mr-2"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //                   />
// // //                 </svg>
// // //                 {error}
// // //               </div>
// // //             )}
// // //           </div>

// // //           {processedImage && (
// // //             <>
// // //               <ImageControls
// // //                 scale={scale}
// // //                 onScaleChange={handleScaleChange}
// // //                 rotation={rotation}
// // //                 onRotationChange={handleRotationChange}
// // //               />

// // //               <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// // //                 <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
// // //                   <svg
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     className="h-5 w-5 mr-2 text-[#A2C579]"
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                     stroke="currentColor"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
// // //                     />
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// // //                     />
// // //                   </svg>
// // //                   Advanced Options
// // //                 </h2>

// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center justify-between">
// // //                     <label className="text-sm font-medium text-[#016A70]">Auto-fit image to container</label>
// // //                     <button
// // //                       onClick={toggleAutoFit}
// // //                       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${autoFit ? "bg-[#016A70]" : "bg-gray-200"}`}
// // //                     >
// // //                       <span
// // //                         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoFit ? "translate-x-6" : "translate-x-1"}`}
// // //                       />
// // //                     </button>
// // //                   </div>

// // //                   <div className="flex justify-between">
// // //                     <button
// // //                       onClick={fitImageToContainer}
// // //                       className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80 transition-colors"
// // //                     >
// // //                       Fit to Container
// // //                     </button>
// // //                     <button
// // //                       onClick={() => {
// // //                         setScale(1)
// // //                         setRotation(0)
// // //                         // Center the image
// // //                         if (previewContainerRef.current && imageDimensions.width > 0) {
// // //                           const container = previewContainerRef.current
// // //                           const containerRect = container.getBoundingClientRect()
// // //                           setPosition({
// // //                             x: (containerRect.width - imageDimensions.width) / 2,
// // //                             y: (containerRect.height - imageDimensions.height) / 2,
// // //                           })
// // //                         }
// // //                       }}
// // //                       className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80 transition-colors"
// // //                     >
// // //                       Reset All
// // //                     </button>
// // //                   </div>

// // //                   <div className="text-xs text-[#016A70]/70 mt-2">
// // //                     <p>
// // //                       • Image dimensions: {imageDimensions.width} × {imageDimensions.height}px
// // //                     </p>
// // //                     <p>• Current scale: {scale.toFixed(2)}x</p>
// // //                     <p>• Current rotation: {rotation}°</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </>
// // //           )}
// // //         </div>

// // //         {/* Preview section */}
// // //         <div className="lg:col-span-2">
// // //           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// // //             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 className="h-5 w-5 mr-2 text-[#A2C579]"
// // //                 fill="none"
// // //                 viewBox="0 0 24 24"
// // //                 stroke="currentColor"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// // //                 />
// // //               </svg>
// // //               Preview
// // //               {processedImage && (
// // //                 <span className="ml-2 text-sm font-normal text-[#016A70]/70">
// // //                   (What you see is exactly what you'll download)
// // //                 </span>
// // //               )}
// // //             </h2>

// // //             {/* Position guide */}
// // //             {processedImage && (
// // //               <div className="mb-4 bg-[#FFFFDD] p-3 rounded-lg flex items-center text-sm text-[#016A70]">
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-5 w-5 mr-2 text-[#016A70]"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //                   />
// // //                 </svg>
// // //                 <span>
// // //                   <strong>Pro Tip:</strong> Drag the image to position it <strong>anywhere</strong> on the template. The
// // //                   entire image will always be visible and positioned exactly as shown when downloaded.
// // //                 </span>
// // //               </div>
// // //             )}

// // //             <div
// // //               ref={previewContainerRef}
// // //               className="relative w-full h-[500px] preview-container overflow-hidden bg-gray-100 rounded-lg shadow-inner"
// // //               style={{
// // //                 backgroundImage: template ? `url(${template.imageUrl})` : "none",
// // //                 backgroundSize: "cover",
// // //                 backgroundPosition: "center",
// // //               }}
// // //             >
// // //               <div ref={canvasRef} className="absolute inset-0">
// // //                 {processedImage && (
// // //                   <DraggableImage
// // //                     ref={imgElementRef}
// // //                     imageUrl={processedImage}
// // //                     position={position}
// // //                     scale={scale}
// // //                     rotation={rotation}
// // //                     onPositionChange={handlePositionChange}
// // //                     imageDimensions={imageDimensions}
// // //                   />
// // //                 )}
// // //                 {/* {showDebugOverlay && (
// // //                   <div className="absolute inset-0 pointer-events-none">
// // //                     <div className="absolute top-0 left-0 bg-red-500/30 w-2 h-2"></div>
// // //                     <div className="absolute top-0 right-0 bg-blue-500/30 w-2 h-2"></div>
// // //                     <div className="absolute bottom-0 left-0 bg-green-500/30 w-2 h-2"></div>
// // //                     <div className="absolute bottom-0 right-0 bg-yellow-500/30 w-2 h-2"></div>
// // //                     <div className="absolute top-1/2 left-1/2 bg-purple-500/30 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"></div>
// // //                     <div
// // //                       className="absolute bg-white/10 border border-dashed border-white/30 pointer-events-none"
// // //                       style={{
// // //                         left: position.x,
// // //                         top: position.y,
// // //                         width: imgElementRef.current ? imgElementRef.current.width * scale : 0,
// // //                         height: imgElementRef.current ? imgElementRef.current.height * scale : 0,
// // //                         transform: `rotate(${rotation}deg)`,
// // //                         transformOrigin: "top left",
// // //                       }}
// // //                     ></div>
// // //                   </div>
// // //                 )} */}
// // //               </div>

// // //               {!processedImage && !isProcessing && (
// // //                 <div className="absolute inset-0 flex items-center justify-center">
// // //                   <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
// // //                     <svg
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       className="h-12 w-12 mx-auto text-[#016A70] mb-4"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                       stroke="currentColor"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
// // //                       />
// // //                     </svg>
// // //                     <h3 className="text-xl font-bold mb-2 text-[#016A70]">Upload an image to get started</h3>
// // //                     <p className="text-[#016A70]/70">
// // //                       Upload your image, click "Remove Background", and then position it anywhere on this template.
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {isProcessing && (
// // //                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
// // //                   <div className="text-center p-6">
// // //                     <div className="w-16 h-16 border-4 border-[#016A70] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
// // //                     <h3 className="text-xl font-bold text-white">Processing Image</h3>
// // //                     <p className="text-white/80">This will just take a moment...</p>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Download button below preview */}
// // //             {processedImage && (
// // //               <div className="mt-4">
// // //                 <DownloadButton
// // //                   canvasRef={canvasRef}
// // //                   previewContainerRef={previewContainerRef}
// // //                   template={template}
// // //                   processedImage={processedImage}
// // //                   position={position}
// // //                   scale={scale}
// // //                   rotation={rotation}
// // //                   previewDimensions={previewDimensions}
// // //                   imageDimensions={imageDimensions}
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default BackgroundRemover
// // import { useState, useRef, useEffect } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { templates } from "../../../data/templates"
// // import ImageUploader from "./ImageUploader"
// // import DraggableImage from "./DraggableImage"
// // import DownloadButton from "./DownloadButton"
// // import ImageControls from "./ImageControls"

// // const BackgroundRemover = ({ templateId }) => {
// //   const navigate = useNavigate()
// //   const [template, setTemplate] = useState(null)
// //   const [uploadedImage, setUploadedImage] = useState(null)
// //   const [processedImage, setProcessedImage] = useState(null)
// //   const [isProcessing, setIsProcessing] = useState(false)
// //   const [error, setError] = useState(null)
// //   const [position, setPosition] = useState({ x: 0, y: 0 })
// //   const [scale, setScale] = useState(1)
// //   const [rotation, setRotation] = useState(0)
// //   const [autoFit, setAutoFit] = useState(true)
// //   const previewContainerRef = useRef(null)
// //   const imgElementRef = useRef(null)
// //   const [previewDimensions, setPreviewDimensions] = useState({ width: 0, height: 0 })
// //   const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

// //   // Find template
// //   useEffect(() => {
// //     const foundTemplate = templates.find((t) => t.id === Number.parseInt(templateId))
// //     if (foundTemplate) setTemplate(foundTemplate)
// //     else navigate("/templates")
// //   }, [templateId, navigate])

// //   // On processed image & size known, auto-fit image to preview
// //   useEffect(() => {
// //     if (processedImage && previewContainerRef.current && imageDimensions.width > 0) {
// //       fitImageToContainer()
// //     }
// //     // eslint-disable-next-line
// //   }, [processedImage, imageDimensions])

// //   // On resize, update container dimensions and refit if autoFit
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (previewContainerRef.current) {
// //         const containerRect = previewContainerRef.current.getBoundingClientRect()
// //         setPreviewDimensions({
// //           width: containerRect.width,
// //           height: containerRect.height,
// //         })
// //         if (autoFit && processedImage && imageDimensions.width > 0) {
// //           fitImageToContainer()
// //         }
// //       }
// //     }
// //     handleResize()
// //     window.addEventListener("resize", handleResize)
// //     return () => window.removeEventListener("resize", handleResize)
// //     // eslint-disable-next-line
// //   }, [processedImage, autoFit, imageDimensions])

// //   const handleImageUpload = (file) => {
// //     setUploadedImage(file)
// //     setProcessedImage(null)
// //     setError(null)
// //     setImageDimensions({ width: 0, height: 0 })
// //   }

// //   const removeBackground = async () => {
// //     if (!uploadedImage) return
// //     setIsProcessing(true)
// //     setError(null)
// //     try {
// //       setTimeout(() => {
// //         const imageUrl = URL.createObjectURL(uploadedImage)
// //         setProcessedImage(imageUrl)
// //         const img = new window.Image()
// //         img.onload = () => {
// //           setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
// //         }
// //         img.src = imageUrl
// //         setIsProcessing(false)
// //       }, 1000)
// //     } catch (err) {
// //       setError("Error removing background. Please try again.")
// //       setIsProcessing(false)
// //     }
// //   }

// //   // Make image fit and be centered (never cropped)
// //   const fitImageToContainer = () => {
// //     if (!previewContainerRef.current || imageDimensions.width === 0) return
// //     const container = previewContainerRef.current
// //     const rect = container.getBoundingClientRect()
// //     const widthScale = rect.width / imageDimensions.width
// //     const heightScale = rect.height / imageDimensions.height
// //     const newScale = Math.min(widthScale, heightScale)
// //     setScale(newScale)
// //     setRotation(0)
// //     // Center
// //     setPosition({
// //       x: rect.width / 2,
// //       y: rect.height / 2,
// //     })
// //   }

// //   // User drag/scale/rotate handlers
// //   const handlePositionChange = (newPosition) => setPosition(newPosition)
// //   const handleScaleChange = (newScale) => setScale(newScale)
// //   const handleRotationChange = (newRotation) => setRotation(newRotation)
// //   const toggleAutoFit = () => {
// //     const updated = !autoFit
// //     setAutoFit(updated)
// //     if (updated && processedImage && imageDimensions.width > 0) {
// //       fitImageToContainer()
// //     }
// //   }
// //   const handleReset = () => {
// //     fitImageToContainer()
// //   }

// //   return (
// //     <div className="space-y-8">
// //       <div className="text-center">
// //         <h1 className="text-4xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
// //           Background Remover Studio
// //         </h1>
// //         <p className="text-[#016A70] max-w-2xl mx-auto">
// //           Upload your image, remove the background, and position it anywhere on the template.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         <div className="lg:col-span-1 space-y-6">
// //           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// //             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
// //               Upload Image
// //             </h2>
// //             <ImageUploader onImageUpload={handleImageUpload} />
// //             {uploadedImage && (
// //               <button
// //                 onClick={removeBackground}
// //                 disabled={isProcessing}
// //                 className="w-full mt-4 bg-gradient-to-r from-[#016A70] to-[#A2C579] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
// //               >
// //                 {isProcessing ? "Processing..." : "Remove Background"}
// //               </button>
// //             )}
// //             {error && (
// //               <div className="mt-4 bg-red-50 text-red-500 p-3 rounded-lg text-sm flex items-center">
// //                 {error}
// //               </div>
// //             )}
// //           </div>

// //           {processedImage && (
// //             <>
// //               <ImageControls
// //                 scale={scale}
// //                 onScaleChange={handleScaleChange}
// //                 rotation={rotation}
// //                 onRotationChange={handleRotationChange}
// //               />
// //               <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// //                 <div className="flex items-center justify-between">
// //                   <label className="text-sm font-medium text-[#016A70]">Auto-fit image to container</label>
// //                   <button
// //                     onClick={toggleAutoFit}
// //                     className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${autoFit ? "bg-[#016A70]" : "bg-gray-200"}`}
// //                   >
// //                     <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoFit ? "translate-x-6" : "translate-x-1"}`} />
// //                   </button>
// //                 </div>
// //                 <div className="flex justify-between mt-3">
// //                   <button onClick={fitImageToContainer} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Fit to Container</button>
// //                   <button onClick={handleReset} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Reset All</button>
// //                 </div>
// //                 <div className="text-xs text-[#016A70]/70 mt-2">
// //                   <p>
// //                     • Image dimensions: {imageDimensions.width} × {imageDimensions.height}px
// //                   </p>
// //                   <p>• Current scale: {scale.toFixed(2)}x</p>
// //                   <p>• Current rotation: {rotation}°</p>
// //                 </div>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Preview */}
// //         <div className="lg:col-span-2">
// //           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
// //             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
// //               Preview {(processedImage) && (<span className="ml-2 text-sm font-normal text-[#016A70]/70">(What you see is exactly what you'll download)</span>)}
// //             </h2>
// //             <div
// //               ref={previewContainerRef}
// //               className="relative w-full h-[500px] preview-container overflow-hidden bg-gray-100 rounded-lg shadow-inner"
// //               style={{
// //                 backgroundImage: template ? `url(${template.imageUrl})` : "none",
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //               }}
// //             >
// //               {processedImage && (
// //                 <DraggableImage
// //                   ref={imgElementRef}
// //                   imageUrl={processedImage}
// //                   position={position}
// //                   scale={scale}
// //                   rotation={rotation}
// //                   onPositionChange={handlePositionChange}
// //                   imageDimensions={imageDimensions}
// //                 />
// //               )}

// //               {!processedImage && !isProcessing && (
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
// //                     <h3 className="text-xl font-bold mb-2 text-[#016A70]">Upload an image to get started</h3>
// //                     <p className="text-[#016A70]/70">
// //                       Upload your image, click "Remove Background", and then position it anywhere on this template.
// //                     </p>
// //                   </div>
// //                 </div>
// //               )}

// //               {isProcessing && (
// //                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
// //                   <div className="text-center p-6">
// //                     <h3 className="text-xl font-bold text-white">Processing Image</h3>
// //                     <p className="text-white/80">This will just take a moment...</p>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //             {/* Download button */}
// //             {processedImage && (
// //               <div className="mt-4">
// //                 <DownloadButton
// //                   template={template}
// //                   processedImage={processedImage}
// //                   position={position}
// //                   scale={scale}
// //                   rotation={rotation}
// //                   previewDimensions={previewDimensions}
// //                   imageDimensions={imageDimensions}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default BackgroundRemover

// import { useState, useRef, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { templates } from "../../../data/templates"
// import ImageUploader from "./ImageUploader"
// import DraggableImage from "./DraggableImage"
// import DownloadButton from "./DownloadButton"
// import ImageControls from "./ImageControls"

// const BackgroundRemover = ({ templateId }) => {
//   const navigate = useNavigate()
//   const [template, setTemplate] = useState(null)
//   const [uploadedImage, setUploadedImage] = useState(null)
//   const [processedImage, setProcessedImage] = useState(null)
//   const [isProcessing, setIsProcessing] = useState(false)
//   const [error, setError] = useState(null)
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [scale, setScale] = useState(1)
//   const [rotation, setRotation] = useState(0)
//   const [autoFit, setAutoFit] = useState(true)
//   const previewContainerRef = useRef(null)
//   const imgElementRef = useRef(null)
//   const [previewDimensions, setPreviewDimensions] = useState({ width: 0, height: 0 })
//   const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

//   // Find template
//   useEffect(() => {
//     const foundTemplate = templates.find((t) => t.id === Number.parseInt(templateId))
//     if (foundTemplate) setTemplate(foundTemplate)
//     else navigate("/templates")
//   }, [templateId, navigate])

//   // On processed image & size known, auto-fit image to preview
//   useEffect(() => {
//     if (processedImage && previewContainerRef.current && imageDimensions.width > 0) {
//       fitImageToContainer()
//     }
//   }, [processedImage, imageDimensions]) //eslint-disable-line

//   // On resize, update container dimensions and refit if autoFit
//   useEffect(() => {
//     const handleResize = () => {
//       if (previewContainerRef.current) {
//         const containerRect = previewContainerRef.current.getBoundingClientRect()
//         setPreviewDimensions({
//           width: containerRect.width,
//           height: containerRect.height,
//         })
//         if (autoFit && processedImage && imageDimensions.width > 0) {
//           fitImageToContainer()
//         }
//       }
//     }
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [processedImage, autoFit, imageDimensions]) //eslint-disable-line

//   const handleImageUpload = (file) => {
//     setUploadedImage(file)
//     setProcessedImage(null)
//     setError(null)
//     setImageDimensions({ width: 0, height: 0 })
//   }

//   // === Using remove.bg API (LIVE) ===
//   const removeBackground = async () => {
//     if (!uploadedImage) return
//     setIsProcessing(true)
//     setError(null)
//     try {
//       // Create form data for the API request
//       const formData = new FormData()
//       formData.append("image_file", uploadedImage)

//       const response = await fetch('https://api.remove.bg/v1.0/removebg', {
//         method: 'POST',
//         headers: {
//           'X-Api-Key': '6aS6uUtJc1Hiw8NQAE8qXNXd',
//         },
//         body: formData,
//       })

//       if (!response.ok) {
//         setError("Error removing background. Please try again.")
//         setIsProcessing(false)
//         return
//       }

//       const blob = await response.blob()
//       const imageUrl = URL.createObjectURL(blob)
//       setProcessedImage(imageUrl)

//       // Load the image to get its natural dimensions
//       const img = new window.Image()
//       img.onload = () => {
//         setImageDimensions({
//           width: img.naturalWidth,
//           height: img.naturalHeight,
//         })
//       }
//       img.src = imageUrl
//     } catch (err) {
//       setError("Error removing background. Please try again.")
//       setIsProcessing(false)
//     } finally {
//       setIsProcessing(false)
//     }
//   }

//   // Make image fit and be centered (never cropped)
//   const fitImageToContainer = () => {
//     if (!previewContainerRef.current || imageDimensions.width === 0) return
//     const container = previewContainerRef.current
//     const rect = container.getBoundingClientRect()
//     const widthScale = rect.width / imageDimensions.width
//     const heightScale = rect.height / imageDimensions.height
//     const newScale = Math.min(widthScale, heightScale)
//     setScale(newScale)
//     setRotation(0)
//     // Center
//     setPosition({
//       x: rect.width / 2,
//       y: rect.height / 2,
//     })
//   }

//   // User drag/scale/rotate handlers
//   const handlePositionChange = (newPosition) => setPosition(newPosition)
//   const handleScaleChange = (newScale) => setScale(newScale)
//   const handleRotationChange = (newRotation) => setRotation(newRotation)
//   const toggleAutoFit = () => {
//     const updated = !autoFit
//     setAutoFit(updated)
//     if (updated && processedImage && imageDimensions.width > 0) {
//       fitImageToContainer()
//     }
//   }
//   const handleReset = () => {
//     fitImageToContainer()
//   }

//   return (
//     <div className="space-y-8">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
//           Background Remover Studio
//         </h1>
//         <p className="text-[#016A70] max-w-2xl mx-auto">
//           Upload your image, remove the background, and position it anywhere on the template.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
//             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
//               Upload Image
//             </h2>
//             <ImageUploader onImageUpload={handleImageUpload} />
//             {uploadedImage && (
//               <button
//                 onClick={removeBackground}
//                 disabled={isProcessing}
//                 className="w-full mt-4 bg-gradient-to-r from-[#016A70] to-[#A2C579] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 {isProcessing ? "Processing..." : "Remove Background"}
//               </button>
//             )}
//             {error && (
//               <div className="mt-4 bg-red-50 text-red-500 p-3 rounded-lg text-sm flex items-center">
//                 {error}
//               </div>
//             )}
//           </div>

//           {processedImage && (
//             <>
//               <ImageControls
//                 scale={scale}
//                 onScaleChange={handleScaleChange}
//                 rotation={rotation}
//                 onRotationChange={handleRotationChange}
//               />
//               <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
//                 <div className="flex items-center justify-between">
//                   <label className="text-sm font-medium text-[#016A70]">Auto-fit image to container</label>
//                   <button
//                     onClick={toggleAutoFit}
//                     className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${autoFit ? "bg-[#016A70]" : "bg-gray-200"}`}
//                   >
//                     <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoFit ? "translate-x-6" : "translate-x-1"}`} />
//                   </button>
//                 </div>
//                 <div className="flex justify-between mt-3">
//                   <button onClick={fitImageToContainer} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Fit to Container</button>
//                   <button onClick={handleReset} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Reset All</button>
//                 </div>
//                 <div className="text-xs text-[#016A70]/70 mt-2">
//                   <p>
//                     • Image dimensions: {imageDimensions.width} × {imageDimensions.height}px
//                   </p>
//                   <p>• Current scale: {scale.toFixed(2)}x</p>
//                   <p>• Current rotation: {rotation}°</p>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Preview */}
//         <div className="lg:col-span-2">
//           <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
//             <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
//               Preview {(processedImage) && (<span className="ml-2 text-sm font-normal text-[#016A70]/70">(What you see is exactly what you'll download)</span>)}
//             </h2>
//             <div
//               ref={previewContainerRef}
//               className="relative w-full h-[500px] preview-container overflow-hidden bg-gray-100 rounded-lg shadow-inner"
//               style={{
//                 backgroundImage: template ? `url(${template.imageUrl})` : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {processedImage && (
//                 <DraggableImage
//                   ref={imgElementRef}
//                   imageUrl={processedImage}
//                   position={position}
//                   scale={scale}
//                   rotation={rotation}
//                   onPositionChange={handlePositionChange}
//                   imageDimensions={imageDimensions}
//                 />
//               )}

//               {!processedImage && !isProcessing && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
//                     <h3 className="text-xl font-bold mb-2 text-[#016A70]">Upload an image to get started</h3>
//                     <p className="text-[#016A70]/70">
//                       Upload your image, click "Remove Background", and then position it anywhere on this template.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {isProcessing && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
//                   <div className="text-center p-6">
//                     <h3 className="text-xl font-bold text-white">Processing Image</h3>
//                     <p className="text-white/80">This will just take a moment...</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//             {/* Download button */}
//             {processedImage && (
//               <div className="mt-4">
//                 <DownloadButton
//                   template={template}
//                   processedImage={processedImage}
//                   position={position}
//                   scale={scale}
//                   rotation={rotation}
//                   previewDimensions={previewDimensions}
//                   imageDimensions={imageDimensions}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BackgroundRemover

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { templates } from "../../../data/templates"
import ImageUploader from "./ImageUploader"
import DraggableImage from "./DraggableImage"
import DownloadButton from "./DownloadButton"
import ImageControls from "./ImageControls"

const BackgroundRemover = ({ templateId }) => {
  const navigate = useNavigate()
  const [template, setTemplate] = useState(null)
  const [templateDimensions, setTemplateDimensions] = useState({ width: 0, height: 0 })
  const [uploadedImage, setUploadedImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const previewContainerRef = useRef(null)
  const imgElementRef = useRef(null)

  // 1. Find template and load template image to get its natural dimensions
  useEffect(() => {
    const foundTemplate = templates.find((t) => t.id === Number.parseInt(templateId))
    if (foundTemplate) {
      setTemplate(foundTemplate)
      if (foundTemplate.imageUrl) {
        const img = new window.Image()
        img.onload = () => setTemplateDimensions({ width: img.naturalWidth, height: img.naturalHeight })
        img.src = foundTemplate.imageUrl
      }
    } else {
      navigate("/templates")
    }
  }, [templateId, navigate])

  // 2. On user photo loaded: get image dimensions, and auto-fit the image to be fully visible in the template area (with letterboxing if aspect ratios differ)
  useEffect(() => {
    if (processedImage) {
      const img = new window.Image()
      img.onload = () => setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
      img.src = processedImage
    }
  }, [processedImage])

  // 3. When user image and template are both loaded, fit user image into the template area—fully visible, centered, never cropped
  useEffect(() => {
    if (
      processedImage &&
      imageDimensions.width > 0 &&
      templateDimensions.width > 0 &&
      templateDimensions.height > 0
    ) {
      fitImageToTemplate()
    }
    // eslint-disable-next-line
  }, [processedImage, imageDimensions, templateDimensions])

  // Fit uploaded image fully inside the template area (with possible letterboxing)
  const fitImageToTemplate = () => {
    const { width: tW, height: tH } = templateDimensions
    const { width: iW, height: iH } = imageDimensions
    if (!tW || !tH || !iW || !iH) return

    // Scale = min(templateW / imgW, templateH / imgH)
    const widthScale = tW / iW
    const heightScale = tH / iH
    const newScale = Math.min(widthScale, heightScale)
    setScale(newScale)
    setRotation(0) // Reset rotation
    // Center image at template center
    setPosition({
      x: tW / 2,
      y: tH / 2,
    })
  }

  const handleImageUpload = (file) => {
    setUploadedImage(file)
    setProcessedImage(null)
    setError(null)
    setImageDimensions({ width: 0, height: 0 })
  }

  const removeBackground = async () => {
    if (!uploadedImage) return
    setIsProcessing(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append("image_file", uploadedImage)

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': '6aS6uUtJc1Hiw8NQAE8qXNXd', 
        },
        body: formData,
      })

      if (!response.ok) {
        setError("Error removing background. Please try again.")
        setIsProcessing(false)
        return
      }

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setProcessedImage(imageUrl)
    } catch (err) {
      setError("Error removing background. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  // Drag/scale/rotate handlers
  const handlePositionChange = (newPosition) => setPosition(newPosition)
  const handleScaleChange = (newScale) => setScale(newScale)
  const handleRotationChange = (newRotation) => setRotation(newRotation)
  const handleReset = () => fitImageToTemplate()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
          Background Remover Studio
        </h1>
        <p className="text-[#016A70] max-w-2xl mx-auto">
          Upload your image, remove the background, and position it anywhere on the template.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
              Upload Image
            </h2>
            <ImageUploader onImageUpload={handleImageUpload} />
            {uploadedImage && (
              <button
                onClick={removeBackground}
                disabled={isProcessing}
                className="w-full mt-4 bg-gradient-to-r from-[#016A70] to-[#A2C579] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? "Processing..." : "Remove Background"}
              </button>
            )}
            {error && (
              <div className="mt-4 bg-red-50 text-red-500 p-3 rounded-lg text-sm flex items-center">
                {error}
              </div>
            )}
          </div>

          {processedImage && (
            <>
              <ImageControls
                scale={scale}
                onScaleChange={handleScaleChange}
                rotation={rotation}
                onRotationChange={handleRotationChange}
              />
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
                <div className="flex justify-between">
                  <button onClick={fitImageToTemplate} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Fit to Template</button>
                  <button onClick={handleReset} className="bg-[#FFFFDD] text-[#016A70] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80">Reset All</button>
                </div>
                <div className="text-xs text-[#016A70]/70 mt-2">
                  <p>• Image dimensions: {imageDimensions.width} × {imageDimensions.height}px</p>
                  <p>• Current scale: {scale.toFixed(2)}x</p>
                  <p>• Current rotation: {rotation}°</p>
                  <p>• Template size: {templateDimensions.width} × {templateDimensions.height}px</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Preview area */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
              Preview {(processedImage) && (<span className="ml-2 text-sm font-normal text-[#016A70]/70">(we are SBSMS!)</span>)}
            </h2>
            <div
              ref={previewContainerRef}
              className="relative preview-container overflow-hidden bg-gray-100 rounded-lg shadow-inner mx-auto"
              style={{
                width: templateDimensions.width || 300,
                height: templateDimensions.height || 300,
                backgroundImage: template ? `url(${template.imageUrl})` : "none",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                transition: 'width 0.2s, height 0.2s'
              }}
            >
              {processedImage && (
                <DraggableImage
                  ref={imgElementRef}
                  imageUrl={processedImage}
                  position={position}
                  scale={scale}
                  rotation={rotation}
                  onPositionChange={handlePositionChange}
                  imageDimensions={imageDimensions}
                />
              )}

              {!processedImage && !isProcessing && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
                    <h3 className="text-xl font-bold mb-2 text-[#016A70]">Upload an image to get started</h3>
                  </div>
                </div>
              )}
              {isProcessing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold text-white">Processing Image</h3>
                    <p className="text-white/80">This will just take a moment...</p>
                  </div>
                </div>
              )}
            </div>
            {processedImage && (
              <div className="mt-4">
                <DownloadButton
                  template={template}
                  processedImage={processedImage}
                  position={position}
                  scale={scale}
                  rotation={rotation}
                  previewDimensions={templateDimensions}
                  imageDimensions={imageDimensions}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundRemover