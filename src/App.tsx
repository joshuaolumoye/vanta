import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingFlow from './pages/onboarding';
import SignIn from './pages/SignIn';
import ForgotPasswordFlow from './pages/forgot-password/ForgotPasswordFlow';
import ProfilePage from './pages/dashboard/ProfilePage';
import CreativeStudio from './pages/dashboard/CreativeStudio';
import FeedPage from './pages/dashboard/FeedPage';
import SettingsPage from './components/settings/SettingsPage';

function SettingsRoute() {
  const navigate = useNavigate();
  return <SettingsPage onBack={() => navigate('/profile')} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPasswordFlow />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/creative-studio" element={<CreativeStudio />} />
        <Route path="/settings" element={<SettingsRoute />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;