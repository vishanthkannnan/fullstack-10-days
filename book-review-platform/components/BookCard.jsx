import Link from "next/link"
import "../styles/BookCard.css"

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-image-wrapper">
        <img src={book.image} alt={book.title} className="book-image" />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-year">{book.year}</p>
        <Link href="/add-review" className="btn btn-primary book-review-btn">
          Write Review
        </Link>
      </div>
    </div>
  )
}

export default BookCard 