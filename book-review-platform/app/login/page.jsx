'use client';
import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/LoginForm.css";
import { useRouter } from "next/navigation";

function ModernLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);
  const buttonRef = useRef(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setIsSubmitting(true);
    setError("");
    setTimeout(() => {
      const result = login(email, password);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => router.push('/'), 500);
      } else {
        setError(result.error || "Invalid credentials.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setIsSubmitting(false);
      }
    }, 800);
  };

  const fieldsFilled = email && password;

  return (
    <div className="login-bg-gradient" style={{ minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#2d2d4d', fontWeight: 800, fontSize: '2.3rem', marginBottom: 8, letterSpacing: 0.5 }}>Welcome Back</h1>
        <p style={{ textAlign: 'center', color: '#7f53ac', fontSize: '1.1rem', marginBottom: 32, opacity: 0.85 }}>Sign in to continue your Bookreview</p>
        <div className="glass-card login-container-react" style={{ margin: 0 }}>
          <h2 style={{ marginBottom: 18 }}>Login</h2>
          <form className={`login-form${shake ? " shake" : ""}`} autoComplete="off" onSubmit={handleLogin}>
            <div className="input-group floating-label">
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
                required
                disabled={isSubmitting || success}
              />
              <label htmlFor="email" className={email ? "filled" : ""}>Email</label>
              <span className="input-placeholder">Enter email</span>
            </div>
            <div className="input-group floating-label">
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
                required
                disabled={isSubmitting || success}
              />
              <label htmlFor="password" className={password ? "filled" : ""}>Password</label>
              <span className="input-placeholder">Enter password</span>
            </div>
            <div className="login-btn-area">
              <div className="btn-container">
                <button
                  ref={buttonRef}
                  type="submit"
                  className={`round-login-btn${fieldsFilled ? " locked" : ""}${success ? " success" : ""}`}
                  disabled={isSubmitting || success}
                  tabIndex={0}
                  aria-label="Login"
                  style={{ padding: '6px 18px', fontSize: '1rem', minWidth: '80px', height: '36px' }}
                  onMouseEnter={e => {
                    if (!fieldsFilled && !isSubmitting && !success) {
                      const moves = ["move-left", "move-right"];
                      const move = moves[Math.floor(Math.random() * moves.length)];
                      buttonRef.current.classList.add(move);
                      setTimeout(() => buttonRef.current.classList.remove(move), 400);
                    }
                  }}
                >
                  submit
                </button>
              </div>
            </div>
            <div className="error-message">{error}</div>
            <div className="success-message">{success ? "Login successful!" : ""}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModernLoginForm; 