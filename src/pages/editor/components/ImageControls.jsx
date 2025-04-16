

const ImageControls = ({ scale, onScaleChange, rotation = 0, onRotationChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A2C579]/20">
      <h2 className="text-xl font-bold mb-4 flex items-center text-[#016A70]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-[#A2C579]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        Adjust Image
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#016A70] mb-1">Scale: {scale.toFixed(1)}x</label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={scale}
            onChange={(e) => onScaleChange(Number.parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#016A70]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#016A70] mb-1">Rotation: {rotation}°</label>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={rotation}
            onChange={(e) => onRotationChange(Number.parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#016A70]"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              onScaleChange(1)
              onRotationChange(0)
            }}
            className="bg-[#FFFFDD] text-[#016A70] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80 transition-colors"
          >
            Reset All
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => onRotationChange((rotation - 90 + 360) % 360)}
              className="bg-[#FFFFDD] text-[#016A70] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80 transition-colors"
            >
              Rotate -90°
            </button>
            <button
              onClick={() => onRotationChange((rotation + 90) % 360)}
              className="bg-[#FFFFDD] text-[#016A70] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#FFFFDD]/80 transition-colors"
            >
              Rotate +90°
            </button>
          </div>
        </div>

        <p className="text-sm text-[#016A70]/70 flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-[#A2C579]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Drag the image to position it on the template. Use rotation to align it perfectly.
        </p>
      </div>
    </div>
  )
}

export default ImageControls
