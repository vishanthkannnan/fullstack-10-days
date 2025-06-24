"use client"

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import "../../styles/Auth.css"

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setLoading(true)

    const result = signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })

    if (result.success) {
      router.push("/")
    } else {
      setError(result.error)
    }

    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <p className="form-subtitle">Join our book-loving community</p>

            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="form-footer">
              Already have an account? <Link href="/login">Sign in here</Link>
            </p>
          </form>
        </div>
        <div className="auth-image">
          <div className="auth-illustration">
            <h3>Start Your Journey</h3>
            <p>Create an account to start sharing and discovering amazing books</p>
            <div className="illustration-books">📚 📖 📕 📗 📘</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp 