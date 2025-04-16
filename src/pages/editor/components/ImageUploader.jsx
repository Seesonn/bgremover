

import { useRef, useState } from "react"

const ImageUploader = ({ onImageUpload }) => {
  const fileInputRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        onImageUpload(file)
        setPreview(URL.createObjectURL(file))
      }
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive ? "border-[#016A70] bg-[#016A70]/5" : "border-gray-300 hover:border-[#A2C579]"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

        {preview ? (
          <div className="space-y-4">
            <img
              src={preview || "/placeholder.svg"}
              alt="Preview"
              className="max-h-40 mx-auto object-contain rounded-md"
            />
            <button
              onClick={handleButtonClick}
              className="text-[#016A70] underline text-sm hover:text-[#A2C579] transition-colors"
            >
              Change image
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-sm text-[#016A70]">
              <button
                type="button"
                className="text-[#016A70] font-medium hover:text-[#A2C579] transition-colors"
                onClick={handleButtonClick}
              >
                Upload a file
              </button>{" "}
              or drag and drop
            </div>
            <p className="text-xs text-[#016A70]/70">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUploader
