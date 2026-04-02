import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MatchingPage from './pages/MatchingPage';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';
import Opportunities from './pages/Opportunities';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="matching" element={<MatchingPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reports" element={<Reports />} />
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
