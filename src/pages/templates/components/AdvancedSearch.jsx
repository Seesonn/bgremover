

import { useState } from "react"

const AdvancedSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#016A70]/60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="block w-full pl-10 pr-20 py-3 border border-[#A2C579]/30 rounded-xl leading-5 bg-white placeholder-[#016A70]/50 focus:outline-none focus:ring-2 focus:ring-[#016A70] focus:border-transparent transition-colors"
            placeholder="Search templates by name, description, or style..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("")
                  onSearch("")
                }}
                className="text-[#016A70]/60 hover:text-[#016A70] transition-colors mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className="text-[#016A70]/60 hover:text-[#016A70] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          </div>
        </div>

        {isAdvancedOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#FFFFDD]/30 rounded-xl">
            <div>
              <label className="block text-sm font-medium text-[#016A70] mb-1">Style</label>
              <select className="w-full p-2 border border-[#A2C579]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016A70]">
                <option value="">Any Style</option>
                <option value="professional">Professional</option>
                <option value="creative">Creative</option>
                <option value="minimal">Minimal</option>
                <option value="colorful">Colorful</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#016A70] mb-1">Color</label>
              <select className="w-full p-2 border border-[#A2C579]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016A70]">
                <option value="">Any Color</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#016A70] mb-1">Usage</label>
              <select className="w-full p-2 border border-[#A2C579]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016A70]">
                <option value="">Any Usage</option>
                <option value="product">Product Photography</option>
                <option value="portrait">Portrait</option>
                <option value="social">Social Media</option>
                <option value="ecommerce">E-commerce</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default AdvancedSearch
