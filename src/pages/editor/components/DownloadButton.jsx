

// const DownloadButton = ({
//   canvasRef,
//   previewContainerRef,
//   template,
//   processedImage,
//   position,
//   scale,
//   rotation,
//   previewDimensions,
//   imageDimensions,
// }) => {
//   const handleDownload = () => {
//     if (!canvasRef.current || !previewContainerRef.current) return

//     // Create a canvas element to draw the composite image
//     const canvas = document.createElement("canvas")
//     const ctx = canvas.getContext("2d")

//     // Use the stored dimensions rather than getting them at download time
//     // This ensures we use the exact same dimensions that were used for preview
//     const width = previewDimensions.width
//     const height = previewDimensions.height

//     // Set canvas dimensions to match the preview container exactly
//     canvas.width = width
//     canvas.height = height

//     // Draw the background (template)
//     if (template) {
//       const bgImg = new Image()
//       bgImg.crossOrigin = "anonymous"
//       bgImg.src = template.imageUrl

//       bgImg.onload = () => {
//         // Draw background to match the preview exactly
//         ctx.drawImage(bgImg, 0, 0, width, height)

//         // Draw the processed image with transformations
//         const img = new Image()
//         img.crossOrigin = "anonymous"
//         img.src = processedImage

//         img.onload = () => {
//           // Save the current context state
//           ctx.save()

//           // 1. Translate to the position
//           ctx.translate(position.x, position.y)

//           // 2. Translate to the center of the image for rotation
//           const imgWidth = imageDimensions.width || img.width
//           const imgHeight = imageDimensions.height || img.height
//           ctx.translate((imgWidth * scale) / 2, (imgHeight * scale) / 2)

//           // 3. Apply rotation
//           ctx.rotate((rotation * Math.PI) / 180)

//           // 4. Translate back
//           ctx.translate((-imgWidth * scale) / 2, (-imgHeight * scale) / 2)

//           // 5. Apply scaling
//           ctx.scale(scale, scale)

//           // Draw the image at the origin (0,0) since we've already translated
//           ctx.drawImage(img, 0, 0, imgWidth, imgHeight)

//           // Restore the context state
//           ctx.restore()

//           // Convert canvas to data URL and trigger download
//           const dataUrl = canvas.toDataURL("image/png")
//           const link = document.createElement("a")
//           link.download = "SBMS.png"
//           link.href = dataUrl
//           link.click()
//         }
//       }
//     }
//   }

//   return (
//     <button
//       onClick={handleDownload}
//       className="w-full bg-gradient-to-r from-[#016A70] to-[#A2C579] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 mr-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//         />
//       </svg>
//       Download Image
//     </button>
//   )
// }

// export default DownloadButton
const DownloadButton = ({
  template,
  processedImage,
  position,
  scale,
  rotation,
  previewDimensions,
  imageDimensions,
}) => {
  const handleDownload = () => {
    if (!processedImage || !template) return
    const width = previewDimensions.width
    const height = previewDimensions.height
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")

    // Draw the background template
    const bgImage = new window.Image()
    bgImage.crossOrigin = "anonymous"
    bgImage.src = template.imageUrl

    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, width, height)
      drawProcessed()
    }

    function drawProcessed() {
      if (!processedImage) return
      const image = new window.Image()
      image.crossOrigin = "anonymous"
      image.src = processedImage
      image.onload = () => {
        ctx.save()
        ctx.translate(position.x, position.y)
        ctx.rotate(rotation * Math.PI / 180)
        ctx.scale(scale, scale)
        ctx.drawImage(
          image,
          -imageDimensions.width / 2,
          -imageDimensions.height / 2,
          imageDimensions.width,
          imageDimensions.height
        )
        ctx.restore()

        // Download
        const link = document.createElement("a")
        link.download = "sbmss.png"
        link.href = canvas.toDataURL("image/png")
        link.click()
      }
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="bg-gradient-to-r from-[#016A70] to-[#A2C579]  text-white px-6 py-3 rounded-xl font-semibold text-lg shadow transition"
    >
      Download Image
    </button>
  )
}

export default DownloadButton