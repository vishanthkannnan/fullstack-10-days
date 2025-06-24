import Link from "next/link"
import "../../styles/About.css"

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-content">
          <h1>Welcome to BookReview Platform</h1>
          <p>
            Whether you're a casual reader or a literary enthusiast, BookReview Platform welcomes you to share your
            passion for books. Create an account today and start your journey of discovering and sharing amazing reads!
          </p>
          <div className="cta-buttons">
            <Link href="/signup" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="/reviews" className="btn btn-secondary">
              Browse Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 