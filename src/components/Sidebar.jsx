import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'OSY Profiles', icon: 'group', path: '/dashboard/profiles' },
    { name: 'Opportunities', icon: 'work', path: '/dashboard/opportunities' },
    { name: 'Matching', icon: 'psychology', path: '/dashboard/matching' },
    { name: 'Notifications', icon: 'notifications', path: '/dashboard/notifications' },
    { name: 'Reports', icon: 'assessment', path: '/dashboard/reports' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 gap-2 bg-slate-50 dark:bg-slate-950 w-64 border-r border-slate-200/15 z-50 font-inter antialiased">
      <div className="flex items-center gap-3 px-2 py-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
        </div>
        <div>
          <h1 className="font-bold text-blue-900 dark:text-blue-200 leading-none">Barangay OSY</h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Profiling System</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-200 hover:translate-x-1 ${
                isActive
                  ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-300 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200/50 flex flex-col gap-1">
        <button
          className="mb-4 w-full bg-gradient-to-r from-primary to-primary-container text-white py-2.5 rounded-lg font-semibold text-sm shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
          Match Skills
        </button>
        <NavLink
          to="/dashboard/help"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-200 hover:translate-x-1 ${
              isActive ? 'bg-white text-blue-800 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50'
            }`
          }
        >
          <span className="material-symbols-outlined text-[20px]">help</span>
          <span className="text-sm">Help Center</span>
        </NavLink>
        <Link
          to="/dashboard/logout"
          className="flex items-center gap-3 px-3 py-2 text-error hover:bg-error-container/20 rounded-lg hover:translate-x-1 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-sm">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
