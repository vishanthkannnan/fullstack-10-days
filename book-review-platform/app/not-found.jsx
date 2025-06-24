import Link from "next/link"
import "../styles/NotFound.css"

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <div className="error-code">404</div>
          <div className="error-books">📚 📖 📕</div>
        </div>

        <div className="not-found-text">
          <h1>Oops! Page Not Found</h1>
          <p>
            Looks like this page got lost in the library! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/reviews" className="btn btn-secondary">
              Browse Reviews
            </Link>
          </div>
        </div>
      </div>

      <div className="not-found-suggestions">
        <h3>What would you like to do?</h3>
        <div className="suggestions-grid">
          <Link href="/" className="suggestion-card">
            <span className="suggestion-icon">🏠</span>
            <span>Go to Homepage</span>
          </Link>
          <Link href="/reviews" className="suggestion-card">
            <span className="suggestion-icon">📖</span>
            <span>Browse Reviews</span>
          </Link>
          <Link href="/about" className="suggestion-card">
            <span className="suggestion-icon">ℹ️</span>
            <span>Learn About Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound 