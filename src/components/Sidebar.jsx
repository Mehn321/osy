import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/' },
    { name: 'OSY Profiles', icon: 'group', path: '/profiles' },
    { name: 'Opportunities', icon: 'work', path: '/opportunities' },
    { name: 'Matching', icon: 'psychology', path: '/matching', fill: true },
    { name: 'Notifications', icon: 'notifications', path: '/notifications' },
    { name: 'Reports', icon: 'assessment', path: '/reports' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 gap-2 bg-slate-50 dark:bg-slate-950 w-64 border-r border-slate-200/15 z-[60] font-inter text-sm antialiased">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center overflow-hidden">
          <img
            alt="Barangay Seal"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJMl_GDxSqMVxZsKLdlN8PDTDbruUZkFn4FR-Nyky4TbTxz5ADSTEDD9MbhDvIDmZt8Yv1VwBcdUqXJYdboig0ywaKBiohb4kK_GYuSByquyA5VYH7b9XJpLtsTYNVZ3j4ND0Y7hhe1pw9Qt-X0fVkm2XvAskIZj4z-jAyESL2eWuuNRjJeTyks8G40H5TiKniciPfvQJSFMpIiMLJaBs3aDQWapnQQjGQofxcRkaq_u5C4se0oMD-ilOHLV3wxMKGxkFDDUZhFm_"
          />
        </div>
        <div>
          <h2 className="font-bold text-blue-900 dark:text-blue-200 leading-none">Barangay OSY</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Profiling System</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:translate-x-1 transition-all ${
              isActive(item.path)
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-300 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
            }`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={item.fill || isActive(item.path) ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-slate-200/10 space-y-1">
        <button className="w-full mb-4 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-lg">bolt</span>
          <span>Match Skills</span>
        </button>
        <Link to="/help" className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all">
          <span className="material-symbols-outlined text-xl">help</span>
          <span>Help Center</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all">
          <span className="material-symbols-outlined text-xl text-error">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
