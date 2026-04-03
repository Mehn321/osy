import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/15 shadow-sm shadow-blue-900/5 ml-0 md:pl-64">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-headline tracking-tight">Civic Horizon</span>
        <div className="hidden md:flex relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm w-80 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            placeholder="Search profiles or programs..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <Link to="/dashboard/settings" className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </Link>
        </div>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface leading-none">Barangay Staff</p>
            <p className="text-[10px] text-slate-500">Administrator</p>
          </div>
          <img
            alt="Administrator Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-primary/10 shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnHbZgWcXSoI7xgcZm2-g3ZGxW2CU58fKOVsDZtsJg4a0iVbdTVUS34PkFm6Mz_S8gdij4_kIHq6eeHBuzY7OsAHrjakzyQYnmyDfmL5R18huOHAgWBH5Zf_xwLvFFN0CATal6U4zq80msOJIEHFjo92mQQMKHZEHSXqGojOsUpb3gsBYPQIr8BlW5_LNwIjYPTILPuexvmRgejbyG7n-Gpk3gsepMt42D-ZcY3fKNPFnsvk2sDWR9vBsgOn2g5nYM1wV2SanQ4mXL"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
