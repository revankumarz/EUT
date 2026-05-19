import { useState } from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const SignUp = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', password: '', confirmPassword: '', agreed: false,
  })
  const [errors, setErrors] = useState({})
  const [showPwd, setShowPwd] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) return
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const err = {}
    if (!form.fullName.trim()) err.fullName = 'Full name is required'
    if (!form.email.trim()) err.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid email address'
    if (!form.phone.trim()) err.phone = 'Phone number is required'
    else if (form.phone.length < 10) err.phone = 'Must be at least 10 digits'
    if (!form.password) err.password = 'Password is required'
    else if (form.password.length < 6) err.password = 'Minimum 6 characters'
    if (!form.confirmPassword) err.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword) err.confirmPassword = 'Passwords do not match'
    if (!form.agreed) err.agreed = 'You must agree to the terms'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    localStorage.setItem('user', JSON.stringify({
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      password: form.password,
    }))
    setSuccessMsg('Account created! Redirecting to Sign In...')
    setTimeout(() => navigate('/signin'), 1200)
  }

  return (
    <div className="auth-bg">
      <div className="auth-wrapper">

        <div className="left-panel">
          <div className="brand-logo">
            <span className="brand-logo-icon" />
            <span className="brand-logo-text">DevStack</span>
          </div>
          <h1 className="left-title">Create Your Account</h1>
          <p className="left-desc">Sign up and start your journey with us. It's quick and easy.</p>
          <ul className="left-features">
            {['Secure & Safe', 'Easy to Use', 'Track Progress', 'Get Started Instantly'].map(f => (
              <li key={f}><FaCheckCircle className="check-icon" />{f}</li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h2 className="form-title text-center">Sign Up</h2>
          <p className="form-sub text-center">Please fill in the details to create your account</p>

          {successMsg && <Alert variant="success">{successMsg}</Alert>}

          <Form onSubmit={handleSubmit} noValidate>
            <Row className="g-2">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="fullName" placeholder="Full Name"
                    value={form.fullName} onChange={handleChange}
                    isInvalid={!!errors.fullName} className="form-input" />
                  <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Email Address"
                    value={form.email} onChange={handleChange}
                    isInvalid={!!errors.email} className="form-input" />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control type="tel" name="phone" placeholder="Phone Number"
                value={form.phone} onChange={handleChange} maxLength={15}
                isInvalid={!!errors.phone} className="form-input" />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
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

            <Form.Group className="mb-3">
              <div className="position-relative">
                <Form.Control type={showConfirm ? 'text' : 'password'} name="confirmPassword"
                  placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange}
                  isInvalid={!!errors.confirmPassword} className="form-input" />
                <span className="eye-toggle" onClick={() => setShowConfirm(s => !s)}>
                  {showConfirm ? '/' : '|'}
                </span>
              </div>
              {errors.confirmPassword && <div className="text-danger small mt-1">{errors.confirmPassword}</div>}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check type="checkbox" name="agreed" id="agreed"
                checked={form.agreed} onChange={handleChange}
                isInvalid={!!errors.agreed}
                label={<span>I agree to the <a href="#" className="link-blue">Terms & Conditions</a> and <a href="#" className="link-blue">Privacy Policy</a></span>}
                feedback={errors.agreed} feedbackType="invalid" />
            </Form.Group>

            <Button type="submit" className="btn-blue w-100 py-2">Sign Up</Button>

            <p className="text-center mt-3 mb-0">
              Already have an account?{' '}
              <Link to="/signin" className="link-blue fw-semibold">Sign In</Link>
            </p>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default SignUp