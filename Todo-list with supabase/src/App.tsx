import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectRoute from './components/ProtectRoute';
import RedirectIfAuthenticated from './components/Redirect';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import ProfileHome from './pages/ProfileHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="sign"
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route path="profile" element={<ProfileHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
