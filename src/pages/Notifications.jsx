const Notifications = () => {
  const notifications = [
    { id: 1, title: 'Matching Successful', message: '12 new candidates matched with the Welding training program.', time: '1 hour ago', icon: 'psychology', unread: true },
    { id: 2, title: 'Report Generated', message: 'The Q2 Placement Report is ready for review.', time: 'Yesterday', icon: 'assessment', unread: false },
    { id: 3, title: 'System Update', message: 'The profiling engine has been updated with new skill categories.', time: '2 days ago', icon: 'update', unread: false },
    { id: 4, title: 'Profile Verified', message: 'Juan Dela Cruz has been verified by the Barangay Admin.', time: '3 days ago', icon: 'verified', unread: false },
  ];

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <span>Barangay OSY</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Notifications</span>
      </nav>

      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">Notifications</h1>
          <p className="text-on-surface-variant">Stay updated on matching results and system activity.</p>
        </div>
        <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
      </header>

      <div className="space-y-4 max-w-3xl">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-4 rounded-xl border flex gap-4 transition-all hover:bg-slate-50 cursor-pointer ${
            notif.unread ? 'bg-white border-primary/20 shadow-sm' : 'bg-surface-container-low border-outline-variant/15'
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              notif.unread ? 'bg-primary-container text-white' : 'bg-surface-container-high text-on-surface-variant'
            }`}>
              <span className="material-symbols-outlined">{notif.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-bold ${notif.unread ? 'text-primary' : 'text-on-surface'}`}>{notif.title}</h3>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">{notif.time}</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">{notif.message}</p>
            </div>
            {notif.unread && (
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-full transition-all">
          Load older notifications
        </button>
      </div>
    </>
  );
};

export default Notifications;
