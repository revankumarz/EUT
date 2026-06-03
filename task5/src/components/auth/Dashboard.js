import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const stored = localStorage.getItem('user');
    if (!isLoggedIn || !stored) {
      navigate('/signin', { replace: true });
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/signin');
  };

  if (!user) return null;

  return (
    <div className="container dashboard-container py-5">
      <div className="card dashboard-card mx-auto">
        <div className="card-body text-center p-4 p-md-5">
          <i className="bi bi-person-circle" style={{ fontSize: '72px', color: '#2563eb' }}></i>
          <h2 className="mb-1 mt-3">Welcome, {user.fullName}!</h2>
          <p className="text-muted">You have successfully signed in to your DevStack account.</p>

          <div className="row mt-4 text-start">
            <div className="col-sm-6 mb-3">
              <div className="info-tile">
                <small className="text-muted d-block">Email</small>
                <strong>{user.email}</strong>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="info-tile">
                <small className="text-muted d-block">Phone</small>
                <strong>{user.phone}</strong>
              </div>
            </div>
          </div>

          <button onClick={handleLogout} className="btn btn-blue mt-3 px-4">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
