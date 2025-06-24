"use client"
import Link from "next/link"
import { useAuth } from "../context/AuthContext"
import "../styles/Home.css"

function Home() {
  const { currentUser } = useAuth()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {currentUser ? `Welcome back, ${currentUser.name}!` : "Discover Your Next Great Read"}
            </h1>
            <p className="hero-subtitle">
              Share your book reviews, discover new favorites, and connect with fellow book lovers
            </p>
            <div className="hero-buttons">
              {currentUser ? (
                <>
                  <Link href="/add-review" className="btn btn-primary">
                    Write a Review
                  </Link>
                  <Link href="/reviews" className="btn btn-secondary">
                    Browse Reviews
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/signup" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link href="/reviews" className="btn btn-secondary">
                    Browse Reviews
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hero-image">
            <div className="book-stack">
              <div className="book book-1">📖</div>
              <div className="book book-2">📚</div>
              <div className="book book-3">📕</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose BookReview?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>Write Reviews</h3>
              <p>Share your thoughts and help others discover great books</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Discover Books</h3>
              <p>Find your next favorite read through community reviews</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Connect</h3>
              <p>Join a community of passionate book lovers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Rate & Review</h3>
              <p>Give ratings and detailed reviews to help others</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Book Reviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Readers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Genres Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
