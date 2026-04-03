import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        <footer className="md:ml-64 py-8 px-6 text-center text-on-surface-variant/60 text-xs border-t border-outline-variant/5">
          © 2024 Civic Horizon Local Governance Platform. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;
