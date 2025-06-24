"use client"

import React, { useState } from "react"
import "../styles/LoginForm.css"

const positions = ["shift-left", "shift-top", "shift-right", "shift-bottom"]

export default function LoginForm() {
  const [uname, setUname] = useState("")
  const [pass, setPass] = useState("")
  const [btnPos, setBtnPos] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isValidLogin, setIsValidLogin] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  React.useEffect(() => {
    const enabled = uname.trim() && pass.trim()
    setBtnDisabled(!enabled)
    setError("")
    setSuccess("")
    setIsSubmitted(false)
    setIsValidLogin(false)
    setBtnPos("")
  }, [uname, pass])

  function showMsg() {
    if (btnDisabled && !isSubmitted) {
      setError("Please fill in all fields")
    } else {
      setError("")
    }
  }

  function shiftButton() {
    if (!btnDisabled) return
    showMsg()
    const currentPosition = positions.find(dir => btnPos === dir)
    const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length]
    setBtnPos(nextPosition || positions[0])
  }

  function validateCredentials(username, password) {
    // Demo credentials
    return username === "admin" && password === "password123"
  }

  function handleLogin(e) {
    e.preventDefault()
    setIsSubmitted(true)
    setError("")
    setSuccess("")
    const valid = validateCredentials(uname.trim(), pass.trim())
    setIsValidLogin(valid)
    if (valid) {
      setSuccess("Login successful!")
      setError("")
      setBtnPos("")
    } else {
      setError("Invalid username or password")
      setSuccess("")
      setIsSubmitted(false)
    }
  }

  return (
    <div className="login-container-react">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          id="uname"
          value={uname}
          onChange={e => setUname(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <div className="error-message">{error}</div>
      <div className="success-message">{success}</div>
      <div className="login-btn-area">
        <div className="btn-container">
          <button
            id="login-btn"
            className={btnPos}
            disabled={btnDisabled}
            onMouseOver={shiftButton}
            onClick={handleLogin}
            style={isValidLogin ? { backgroundColor: "#4CAF50" } : {}}
          >
            {isValidLogin ? "Welcome!" : "Login"}
          </button>
        </div>
      </div>
    </div>
  )
}
