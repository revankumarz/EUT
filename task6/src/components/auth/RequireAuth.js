import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default RequireAuth;
