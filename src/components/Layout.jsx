import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = () => {
  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-0 md:ml-64 p-6 lg:p-10 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
