"use client"
import "../styles/ThemeToggle.css"

function ThemeToggle({ toggleTheme, darkMode }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-icon">{darkMode ? "☀️" : "🌙"}</span>
    </button>
  )
}

export default ThemeToggle
