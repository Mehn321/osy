const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/15 shadow-sm shadow-blue-900/5 ml-0 md:pl-64">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input
            className="w-full bg-slate-100/50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
            placeholder="Search profiles or opportunities..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-none">Admin User</p>
            <p className="text-[10px] text-slate-500">Barangay Admin</p>
          </div>
          <img
            alt="Administrator Profile"
            className="w-9 h-9 rounded-full bg-slate-200 ring-2 ring-white"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHD4hV9cLuLNRKnCnBgOYvDtLhQNb_UH8VqMX_sfFiQRp4kpOL5S10jT98KHHw00YNqKk-JLf4JOwsG6HHwxFTxsDWQsPZ2NWtKeSi_SWAFT5y9h2fIW9y3g3Sf6YcM_zukcK_PBJoDXRcT064lbF5qvH-KNM5_RObUfEIGtl_d6GRdvBFMdc4g_K9qS-BvpcwVBOL6MNxD1r8BJSFs3GeHXOr9S6fhzVlZGZlHm3oxzDQ1jGuut76zfoqQPLfJNEd8EBnWlPyG8H"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
