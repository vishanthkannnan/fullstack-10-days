"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
// import ThemeToggle from "./ThemeToggle"
import "../styles/Header.css"

function Header({ toggleTheme, darkMode }) {
  const { currentUser, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <span className="logo-icon">📚</span>
          BookReview
        </Link>

        <nav className="nav">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/reviews" className="nav-link">
            Reviews
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>

          {currentUser ? (
            <>
              <Link href="/add-review" className="nav-link">
                Add Review
              </Link>
              <Link href="/profile" className="nav-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="nav-link logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="nav-link">
                Login
              </Link>
              <Link href="/signup" className="nav-link">
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} /> */}
      </div>
    </header>
  )
}

export default Header
