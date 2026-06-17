import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', password: '', confirmPassword: '', agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = 'Full name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid email address';
    if (!form.phone.trim()) err.phone = 'Phone number is required';
    else if (form.phone.length < 10) err.phone = 'Must be at least 10 digits';
    if (!form.password) err.password = 'Password is required';
    else if (form.password.length < 6) err.password = 'Minimum 6 characters';
    if (!form.confirmPassword) err.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) err.confirmPassword = 'Passwords do not match';
    if (!form.agreed) err.agreed = 'You must agree to the terms';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    localStorage.setItem('user', JSON.stringify({
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      password: form.password,
    }));
    setSuccessMsg('Account created! Redirecting to Sign In...');
    setTimeout(() => navigate('/signin'), 1200);
  };

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
              <li key={f}><i className="bi bi-check-circle-fill check-icon"></i>{f}</li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h2 className="form-title text-center">Sign Up</h2>
          <p className="form-sub text-center">Please fill in the details to create your account</p>

          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-2">
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" name="fullName" placeholder="Full Name"
                    value={form.fullName} onChange={handleChange}
                    className={`form-control form-input ${errors.fullName ? 'is-invalid' : ''}`} />
                  {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="email" name="email" placeholder="Email Address"
                    value={form.email} onChange={handleChange}
                    className={`form-control form-input ${errors.email ? 'is-invalid' : ''}`} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <input type="tel" name="phone" placeholder="Phone Number"
                value={form.phone} onChange={handleChange} maxLength={15}
                className={`form-control form-input ${errors.phone ? 'is-invalid' : ''}`} />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-3 position-relative">
              <input type={showPwd ? 'text' : 'password'} name="password"
                placeholder="Password" value={form.password} onChange={handleChange}
                className={`form-control form-input ${errors.password ? 'is-invalid' : ''}`} />
              <span className="eye-toggle" onClick={() => setShowPwd(s => !s)}>
                <i className={`bi ${showPwd ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </span>
              {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
            </div>

            <div className="mb-3 position-relative">
              <input type={showConfirm ? 'text' : 'password'} name="confirmPassword"
                placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange}
                className={`form-control form-input ${errors.confirmPassword ? 'is-invalid' : ''}`} />
              <span className="eye-toggle" onClick={() => setShowConfirm(s => !s)}>
                <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </span>
              {errors.confirmPassword && <div className="text-danger small mt-1">{errors.confirmPassword}</div>}
            </div>

            <div className="mb-4 form-check">
              <input type="checkbox" name="agreed" id="agreed"
                checked={form.agreed} onChange={handleChange}
                className={`form-check-input ${errors.agreed ? 'is-invalid' : ''}`} />
              <label htmlFor="agreed" className="form-check-label">
                I agree to the <a href="#t" className="link-blue">Terms & Conditions</a> and <a href="#p" className="link-blue">Privacy Policy</a>
              </label>
              {errors.agreed && <div className="text-danger small">{errors.agreed}</div>}
            </div>

            <button type="submit" className="btn btn-blue w-100 py-2">Sign Up</button>

            <p className="text-center mt-3 mb-0">
              Already have an account?{' '}
              <Link to="/signin" className="link-blue fw-semibold">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
