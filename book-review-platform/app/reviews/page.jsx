"use client"

import { useState, useEffect } from "react"
import ReviewCard from "../../components/ReviewCard"
import BookCard from "../../components/BookCard"
import "../../styles/ReviewList.css"
import "../../styles/BookCard.css"

// Static book data (can be moved to a separate file later)
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    image: "https://covers.openlibrary.org/b/isbn/0743273567-L.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    image: "https://covers.openlibrary.org/b/isbn/0446310786-L.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    image: "https://covers.openlibrary.org/b/isbn/0679783261-L.jpg",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    image: "https://covers.openlibrary.org/b/isbn/0345339681-L.jpg",
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    image: "https://covers.openlibrary.org/b/isbn/1503280780-L.jpg",
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    image: "https://covers.openlibrary.org/b/isbn/1400079985-L.jpg",
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    image: "https://covers.openlibrary.org/b/isbn/0316769487-L.jpg",
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    image: "https://covers.openlibrary.org/b/isbn/0618640150-L.jpg",
  },
  {
    id: 10,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    image: "https://covers.openlibrary.org/b/isbn/0142437204-L.jpg",
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    image: "https://covers.openlibrary.org/b/isbn/0060850523-L.jpg",
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    image: "https://covers.openlibrary.org/b/isbn/0061122416-L.jpg",
  },
  {
    id: 13,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    image: "https://covers.openlibrary.org/b/isbn/0486415872-L.jpg",
  },
  {
    id: 14,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    year: 1847,
    image: "https://covers.openlibrary.org/b/isbn/0141439556-L.jpg",
  },
  {
    id: 15,
    title: "The Odyssey",
    author: "Homer",
    year: -800,
    image: "https://covers.openlibrary.org/b/isbn/0140268863-L.jpg",
  },
]

function ReviewList() {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [filterRating, setFilterRating] = useState("all")

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || []
    setReviews(savedReviews)
    setFilteredReviews(savedReviews)
  }, [])

  useEffect(() => {
    let filtered = [...reviews]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.reviewerName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Rating filter
    if (filterRating !== "all") {
      filtered = filtered.filter((review) => review.rating === Number.parseInt(filterRating))
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt)
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt)
        case "rating-high":
          return b.rating - a.rating
        case "rating-low":
          return a.rating - b.rating
        case "title":
          return a.bookTitle.localeCompare(b.bookTitle)
        default:
          return 0
      }
    })

    setFilteredReviews(filtered)
  }, [reviews, searchTerm, sortBy, filterRating])

  return (
    <div className="review-list-page">
      {/* Book Collection Section */}
      <div className="books-page">
        <h1 className="books-title">Discover Your Next Read</h1>
        <p className="books-subtitle">Browse our collection of books and write a review</p>
        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="review-list-header">
        <h1>Book Reviews</h1>
        <p>Discover what our community thinks about their latest reads</p>
      </div>

      {/* Filters and Search */}
      <div className="review-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search books, authors, or reviewers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-controls">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="rating-high">Highest Rated</option>
            <option value="rating-low">Lowest Rated</option>
            <option value="title">Title A-Z</option>
          </select>

          <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)} className="filter-select">
            <option value="all">All Ratings</option>
            <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
            <option value="4">⭐⭐⭐⭐☆ (4 stars)</option>
            <option value="3">⭐⭐⭐☆☆ (3 stars)</option>
            <option value="2">⭐⭐☆☆☆ (2 stars)</option>
            <option value="1">⭐☆☆☆☆ (1 star)</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <span className="results-count">
          {filteredReviews.length} review{filteredReviews.length !== 1 ? "s" : ""} found
        </span>
      </div>

      {/* Reviews Grid */}
      <div className="reviews-grid">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => <ReviewCard key={review.id} review={review} />)
        ) : (
          <div className="no-reviews">
            <div className="no-reviews-icon">📚</div>
            <h3>No reviews found</h3>
            <p>
              {searchTerm || filterRating !== "all"
                ? "Try adjusting your search or filters"
                : "Be the first to add a review!"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewList 