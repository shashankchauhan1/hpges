"use client"

import { useState } from "react"
import Exams from "./components/Exams"
import NonMedicalExams from "./components/NonMedicalExams"
import JBTExams from "./components/JBTExams"
import HPTETNonMedicalExams from "./components/HPTETNonMedicalExams"
import HPTETJBTExams from "./components/HPTETJBTExams"
import "./App.css"

const examCategories = [
  { id: "home", name: "Home", icon: "🏠" },
  { id: "medical", name: "HP Medical TGT", icon: "🏥" },
  { id: "nonmedical", name: "HP Non-Medical TGT", icon: "📚" },
  { id: "jbt", name: "HP JBT", icon: "👨‍🏫" },
  { id: "hptet", name: "HPTET Non-Medical", icon: "🎓" },
  { id: "hptetjbt", name: "HPTET JBT", icon: "🧑‍🎓" },
  { id: "other", name: "Other Exams (Coming Soon)", icon: "📝", disabled: true },
]

function App() {
  const [activeCategory, setActiveCategory] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setSidebarOpen(false) // Close sidebar on mobile after selection
  }

  const renderContent = () => {
    switch (activeCategory) {
      case "medical":
        return <Exams />
      case "nonmedical":
        return <NonMedicalExams />
      case "jbt":
        return <JBTExams />
      case "hptet":
        return <HPTETNonMedicalExams />
      case "hptetjbt":
        return <HPTETJBTExams />
      case "home":
      default:
        return (
          <div className="home-content">
            <div className="hero-section">
              <h1 className="hero-title">Himachal Pradesh Exam Portal</h1>
              <p className="hero-subtitle">Your comprehensive resource for HP government exam preparation</p>
              <div className="hero-stats">
                <div className="stat-card">
                  <span className="stat-number">34+</span>
                  <span className="stat-label">Question Papers</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Answer Keys</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Active Categories</span>
                </div>
              </div>
            </div>

            <div className="categories-grid">
              <div className="category-card active" onClick={() => handleCategoryChange("medical")}>
                <div className="category-icon">🏥</div>
                <h3>HP Medical TGT</h3>
                <p>Previous year papers and answer keys for HP Medical TGT Commission exams</p>
                <span className="category-count">6 Papers Available</span>
              </div>

              <div className="category-card active" onClick={() => handleCategoryChange("nonmedical")}>
                <div className="category-icon">📚</div>
                <h3>HP Non-Medical TGT</h3>
                <p>Previous year papers and answer keys for HP Non-Medical TGT Commission exams</p>
                <span className="category-count">3 Papers Available</span>
              </div>

              <div className="category-card active" onClick={() => handleCategoryChange("jbt")}>
                <div className="category-icon">👨‍🏫</div>
                <h3>HP JBT Exams</h3>
                <p>Junior Basic Training exam papers and study materials for primary teachers</p>
                <span className="category-count">9 Papers Available</span>
              </div>

              <div className="category-card active" onClick={() => handleCategoryChange("hptet")}>
                <div className="category-icon">🎓</div>
                <h3>HPTET Non-Medical</h3>
                <p>HP Teacher Eligibility Test Non-Medical papers for secondary teacher qualification</p>
                <span className="category-count">8 Papers Available</span>
              </div>

              <div className="category-card active" onClick={() => handleCategoryChange("hptetjbt")}>
                <div className="category-icon">🧑‍🎓</div>
                <h3>HPTET JBT</h3>
                <p>HP Teacher Eligibility Test JBT papers for primary teacher qualification</p>
                <span className="category-count">8 Papers Available</span>
              </div>

              <div className="category-card disabled">
                <div className="category-icon">📝</div>
                <h3>Other Exams</h3>
                <p>Additional HP government exam papers and materials</p>
                <span className="category-status">Coming Soon</span>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="app-container">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg
          className={`hamburger-icon ${sidebarOpen ? "open" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Header */}
      <div className="mobile-header">
        <h1 className="mobile-title">HP Exams</h1>
        <p className="mobile-subtitle">{examCategories.find((cat) => cat.id === activeCategory)?.name || "Home"}</p>
      </div>

      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">HP Exams</h2>
          <p className="sidebar-subtitle">Exam Portal</p>
        </div>

        <ul className="nav-menu">
          {examCategories.map((category) => (
            <li key={category.id}>
              <button
                className={`nav-item ${activeCategory === category.id ? "active" : ""} ${category.disabled ? "disabled" : ""}`}
                onClick={() => !category.disabled && handleCategoryChange(category.id)}
                disabled={category.disabled}
              >
                <span className="nav-icon">{category.icon}</span>
                <span className="nav-text">{category.name}</span>
                {!category.disabled && activeCategory === category.id && <span className="nav-indicator">●</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="footer-info">
            <p className="footer-text">© 2025 HP Exam Portal</p>
            <p className="footer-subtext">Not a Official Site of Hp Govt</p>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {sidebarOpen && <div className="mobile-overlay" onClick={() => setSidebarOpen(false)} />}

      <main className="main-content">{renderContent()}</main>
    </div>
  )
}

export default App
