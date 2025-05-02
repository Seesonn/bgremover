

import { useState, useEffect } from "react"
import { templates } from "../../data/templates"
import SectionHeading from "../../components/SectionHeading"
import AdvancedSearch from "./components/AdvancedSearch"
import TemplateGrid from "./components/TemplateGrid"
import CategoryFilter from "./components/CategoryFilter"
import ViewToggle from "./components/ViewToggle"
import SortOptions from "./components/SortOptions"

const TemplatesPage = () => {
  const [filteredTemplates, setFilteredTemplates] = useState(templates)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [sortOption, setSortOption] = useState("newest")

  // Categories derived from templates
  const categories = [
    { id: "all", name: "All Templates" },
    { id: "event", name: "Event" },
    { id: "birthday", name: "Birthday" },
    { id: "Office", name: "office" },

   
  ]

  useEffect(() => {
    let filtered = [...templates]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (template) =>
          template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((template) => template.name.toLowerCase().includes(selectedCategory.toLowerCase()))
    }

    // Apply sorting
    switch (sortOption) {
      case "newest":
        filtered = filtered.sort((a, b) => b.id - a.id)
        break
      case "oldest":
        filtered = filtered.sort((a, b) => a.id - b.id)
        break
      case "nameAsc":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "nameDesc":
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        break
    }

    setFilteredTemplates(filtered)
  }, [searchTerm, selectedCategory, sortOption])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleViewModeChange = (mode) => {
    setViewMode(mode)
  }

  const handleSortChange = (option) => {
    setSortOption(option)
  }

  return (
    <div className="py-20">
      <SectionHeading
        title="Browse Templates"
        subtitle="Choose from our collection of professional templates for your background removal needs."
      />

      <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
        <AdvancedSearch onSearch={handleSearch} />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <CategoryFilter categories={categories} selected={selectedCategory} onChange={handleCategoryChange} />

          <div className="flex items-center space-x-4">
            <SortOptions selected={sortOption} onChange={handleSortChange} />
            <ViewToggle selected={viewMode} onChange={handleViewModeChange} />
          </div>
        </div>
      </div>

      <TemplateGrid templates={filteredTemplates} viewMode={viewMode} />
    </div>
  )
}

export default TemplatesPage
