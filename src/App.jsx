import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/home/HomePage"
import TemplatesPage from "./pages/templates/TemplatesPage"
import EditorPage from "./pages/editor/EditorPage"
import AboutPage from "./pages/about/AboutPage"

import "./index.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFFDD] flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/editor/:templateId" element={<EditorPage />} />
            <Route path="/about" element={<AboutPage />} />
          
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
