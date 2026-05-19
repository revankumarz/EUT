import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const SignIn = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [showPwd, setShowPwd] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (loginError) setLoginError('')
  }

  const validate = () => {
    const err = {}
    if (!form.email.trim()) err.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid email address'
    if (!form.password) err.password = 'Password is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }

    const stored = localStorage.getItem('user')
    if (!stored) { setLoginError('No account found. Please sign up first.'); return }

    const user = JSON.parse(stored)
    if (user.email === form.email.trim().toLowerCase() && user.password === form.password) {
      localStorage.setItem('isLoggedIn', 'true')
      setSuccessMsg('Login successful! Redirecting...')
      setTimeout(() => navigate('/dashboard'), 900)
    } else {
      setLoginError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-wrapper">

        <div className="left-panel">
          <div className="brand-logo">
            <span className="brand-logo-icon" />
            <span className="brand-logo-text">DevStack</span>
          </div>
          <h1 className="left-title">Welcome Back!</h1>
          <p className="left-desc">Sign in to continue your journey and manage your account.</p>
          <ul className="left-features">
            {['Secure Login', 'Track Your Progress', 'Manage Your Account', 'Achieve Your Goals'].map(f => (
              <li key={f}><FaCheckCircle className="check-icon" />{f}</li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h2 className="form-title text-center">Sign In</h2>
          <p className="form-sub text-center">Welcome back! Please sign in to your account</p>

          {loginError && <Alert variant="danger">{loginError}</Alert>}
          {successMsg && <Alert variant="success">{successMsg}</Alert>}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email Address"
                value={form.email} onChange={handleChange}
                isInvalid={!!errors.email} className="form-input" />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="position-relative">
                <Form.Control type={showPwd ? 'text' : 'password'} name="password"
                  placeholder="Password" value={form.password} onChange={handleChange}
                  isInvalid={!!errors.password} className="form-input" />
                <span className="eye-toggle" onClick={() => setShowPwd(s => !s)}>
                  {showPwd ? '/' : '|'}
                </span>
              </div>
              {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <Form.Check type="checkbox" name="remember" id="remember"
                label="Remember Me" checked={form.remember} onChange={handleChange} />
              <a href="#" className="link-blue small">Forgot Password?</a>
            </div>

            <Button type="submit" className="btn-blue w-100 py-2">Sign In</Button>

            <div className="divider-text my-3"><span>or continue with</span></div>

            <div className="social-buttons mb-3">
              <button type="button" className="social-btn">G</button>
              <button type="button" className="social-btn">f</button>
              <button type="button" className="social-btn">A</button>
            </div>

            <p className="text-center mt-2 mb-0">
              Don't have an account?{' '}
              <Link to="/signup" className="link-blue fw-semibold">Sign Up</Link>
            </p>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default SignIn