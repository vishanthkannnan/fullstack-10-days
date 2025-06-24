"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/navigation"
import "../../styles/AddReview.css"

function AddReview() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    rating: 5,
    review: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [currentUser, router])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const newReview = {
      id: Date.now().toString(),
      ...formData,
      rating: Number.parseInt(formData.rating),
      reviewerName: currentUser.name,
      reviewerId: currentUser.id,
      createdAt: new Date().toISOString(),
    }

    // Save to localStorage
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || []
    existingReviews.push(newReview)
    localStorage.setItem("reviews", JSON.stringify(existingReviews))

    setLoading(false)
    setSuccess(true)

    // Reset form
    setFormData({
      bookTitle: "",
      author: "",
      rating: 5,
      review: "",
    })

    // Redirect after success
    setTimeout(() => {
      router.push("/reviews")
    }, 2000)
  }

  if (success) {
    return (
      <div className="add-review-page">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Review Added Successfully!</h2>
          <p>Thank you for sharing your thoughts. Redirecting to reviews...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="add-review-page">
      <div className="add-review-container">
        <div className="add-review-header">
          <h1>Add a Book Review</h1>
          <p>Share your thoughts about a book you've read</p>
        </div>

        <form className="add-review-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bookTitle">Book Title *</label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                required
                placeholder="Enter the book title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                placeholder="Enter the author's name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating *</label>
            <div className="rating-input">
              <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐☆ (4 stars)</option>
                <option value={3}>⭐⭐⭐☆☆ (3 stars)</option>
                <option value={2}>⭐⭐☆☆☆ (2 stars)</option>
                <option value={1}>⭐☆☆☆☆ (1 star)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="review">Your Review *</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your detailed review here... What did you like or dislike about the book?"
            />
            <div className="character-count">{formData.review.length} characters</div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => router.push("/reviews")}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Publishing..." : "Publish Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddReview 