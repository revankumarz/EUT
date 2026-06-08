import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (loginError) setLoginError('');
  };

  const validate = () => {
    const err = {};
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid email address';
    if (!form.password) err.password = 'Password is required';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }

    const stored = localStorage.getItem('user');
    if (!stored) { setLoginError('No account found. Please sign up first.'); return; }

    const user = JSON.parse(stored);
    if (user.email === form.email.trim().toLowerCase() && user.password === form.password) {
      localStorage.setItem('isLoggedIn', 'true');
      setSuccessMsg('Login successful! Redirecting to Nurserylive...');
      setTimeout(() => navigate('/'), 900);
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

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
              <li key={f}><i className="bi bi-check-circle-fill check-icon"></i>{f}</li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h2 className="form-title text-center">Sign In</h2>
          <p className="form-sub text-center">Welcome back! Please sign in to your account</p>

          {loginError && <div className="alert alert-danger">{loginError}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input type="email" name="email" placeholder="Email Address"
                value={form.email} onChange={handleChange}
                className={`form-control form-input ${errors.email ? 'is-invalid' : ''}`} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" name="remember" id="remember"
                  className="form-check-input"
                  checked={form.remember} onChange={handleChange} />
                <label htmlFor="remember" className="form-check-label">Remember Me</label>
              </div>
              <a href="#f" className="link-blue small">Forgot Password?</a>
            </div>

            <button type="submit" className="btn btn-blue w-100 py-2">Sign In</button>

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
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
