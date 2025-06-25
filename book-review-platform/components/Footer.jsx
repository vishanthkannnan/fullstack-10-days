import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BookReview Platform</h3>
            <p>Share your thoughts on books and discover new reads!</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2005 BookReview Platform. made by vishhh.pvt.lts</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
