"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import ReviewCard from "../../components/ReviewCard"
import "../../styles/Profile.css"

function Profile() {
  const { currentUser, logout } = useAuth()
  const router = useRouter()
  const [userReviews, setUserReviews] = useState([])
  const [stats, setStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    favoriteGenre: "Fiction",
  })

  useEffect(() => {
    if (currentUser) {
      const allReviews = JSON.parse(localStorage.getItem("reviews")) || []
      const myReviews = allReviews.filter((review) => review.reviewerId === currentUser.id)
      setUserReviews(myReviews)

      // Calculate stats
      const totalReviews = myReviews.length
      const averageRating =
        totalReviews > 0 ? (myReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1) : 0

      setStats({
        totalReviews,
        averageRating,
        favoriteGenre: "Fiction", // This could be calculated based on review data
      })
    }
  }, [currentUser])

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [currentUser, router])

  const handleDeleteReview = (reviewId) => {
    const allReviews = JSON.parse(localStorage.getItem("reviews")) || []
    const updatedReviews = allReviews.filter((review) => review.id !== reviewId)
    localStorage.setItem("reviews", JSON.stringify(updatedReviews))
    setUserReviews(userReviews.filter((review) => review.id !== reviewId))
  }

  if (!currentUser) {
    return <div>Loading...</div>
  }

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            <span className="avatar-text">{currentUser.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="profile-details">
            <h1>{currentUser.name}</h1>
            <p className="profile-email">{currentUser.email}</p>
            <p className="profile-joined">
              Member since{" "}
              {new Date(currentUser.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>

      {/* Profile Stats */}
      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-number">{stats.totalReviews}</div>
          <div className="stat-label">Reviews Written</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.averageRating}</div>
          <div className="stat-label">Average Rating</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.favoriteGenre}</div>
          <div className="stat-label">Favorite Genre</div>
        </div>
      </div>

      {/* User Reviews */}
      <div className="profile-reviews">
        <div className="reviews-header">
          <h2>My Reviews</h2>
          <Link href="/add-review" className="btn btn-primary">
            Add New Review
          </Link>
        </div>

        {userReviews.length > 0 ? (
          userReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onDelete={handleDeleteReview}
            />
          ))
        ) : (
          <div className="no-reviews">
            <div className="no-reviews-icon">📚</div>
            <h3>No reviews yet</h3>
            <p>Start sharing your thoughts about books you've read!</p>
            <Link href="/add-review" className="btn btn-primary">
              Write Your First Review
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile 