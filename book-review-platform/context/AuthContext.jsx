"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    setCurrentUser(user)
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      setCurrentUser(user)
      localStorage.setItem("currentUser", JSON.stringify(user))
      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const existingUser = users.find((u) => u.email === userData.email)

    if (existingUser) {
      return { success: false, error: "User already exists" }
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    setCurrentUser(newUser)
    localStorage.setItem("currentUser", JSON.stringify(newUser))

    return { success: true }
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
