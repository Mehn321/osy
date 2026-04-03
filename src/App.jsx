import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MatchingPage from './pages/MatchingPage';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';
import OSYRegistry from './pages/OSYRegistry';
import Opportunities from './pages/Opportunities';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import SignIn from './pages/SignIn';
import NotificationTemplates from './pages/NotificationTemplates';
import ProfileDetail from './pages/ProfileDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="registry" element={<OSYRegistry />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="matching" element={<MatchingPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="notifications/templates" element={<NotificationTemplates />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profiles/:id" element={<ProfileDetail />} />
          <Route path="help" element={<Help />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<div className="text-center py-20 font-bold text-2xl text-primary">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
