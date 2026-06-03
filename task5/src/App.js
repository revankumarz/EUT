import { Routes, Route } from 'react-router-dom';
import NurseryHome from './pages/NurseryHome';
import FashionStorePage from './pages/FashionStorePage';
import TrendingGardeningPage from './pages/TrendingGardeningPage';
import Cart from './components/store/Cart';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/auth/Dashboard';
import RequireAuth from './components/auth/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<RequireAuth><NurseryHome /></RequireAuth>} />
      <Route path="/fashion-store" element={<RequireAuth><FashionStorePage /></RequireAuth>} />
      <Route path="/trendinggardening" element={<RequireAuth><TrendingGardeningPage /></RequireAuth>} />
      <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
    </Routes>
  );
}

export default App;
