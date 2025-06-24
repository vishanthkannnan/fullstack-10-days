import "../styles/ReviewCard.css"

function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="review-card">
      <div className="review-header">
        <h3 className="book-title">{review.bookTitle}</h3>
        <div className="rating">
          <span className="stars">{renderStars(review.rating)}</span>
          <span className="rating-number">({review.rating}/5)</span>
        </div>
      </div>

      <p className="book-author">by {review.author}</p>

      <div className="review-content">
        <p className="review-text">{review.review}</p>
      </div>

      <div className="review-footer">
        <div className="reviewer-info">
          <span className="reviewer-name">👤 {review.reviewerName}</span>
        </div>
        <span className="review-date">{formatDate(review.createdAt)}</span>
      </div>
    </div>
  )
}

export default ReviewCard
