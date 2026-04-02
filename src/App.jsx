import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MatchingPage from './pages/MatchingPage';
import { Dashboard, Profiles, Opportunities, Notifications, Reports } from './pages/PlaceholderPages';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
