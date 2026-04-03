import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'Total OSY', value: '1,248', icon: 'groups', color: 'bg-primary-container', textColor: 'text-white' },
    { label: 'In Training', value: '312', icon: 'school', color: 'bg-tertiary-container', textColor: 'text-on-tertiary-container' },
    { label: 'Employed', value: '456', icon: 'work', color: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
    { label: 'Pending', value: '480', icon: 'pending_actions', color: 'bg-surface-container-high', textColor: 'text-primary' },
  ];

  const recentActivities = [
    { id: 1, user: 'Juan Dela Cruz', action: 'Completed NC II Welding', time: '2 hours ago', icon: 'check_circle', iconColor: 'text-green-500' },
    { id: 2, user: 'Maria Santos', action: 'Enrolled in Safety Workshop', time: '5 hours ago', icon: 'edit_note', iconColor: 'text-blue-500' },
    { id: 3, user: 'System', action: 'Generated Monthly Report', time: '1 day ago', icon: 'analytics', iconColor: 'text-purple-500' },
    { id: 4, user: 'Ricardo Bautista', action: 'Matched with Infrastructure Project', time: '2 days ago', icon: 'handshake', iconColor: 'text-orange-500' },
  ];

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Dashboard Overview</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Dashboard</h1>
        <p className="text-on-surface-variant">Welcome back, Administrator. Here's what's happening today.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 rounded-xl glass-panel border border-outline-variant/15 shadow-sm flex flex-col gap-2">
            <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center ${stat.textColor} mb-2`}>
              <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
            </div>
            <span className="text-3xl font-black text-primary">{stat.value}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-on-surface">Skills Distribution</h2>
            <Link to="/reports" className="text-sm font-bold text-primary hover:underline">View Analytics</Link>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 space-y-4">
            {[
              { skill: 'Construction', count: 450, percentage: 75 },
              { skill: 'Hospitality', count: 300, percentage: 50 },
              { skill: 'IT & Digital', count: 180, percentage: 30 },
              { skill: 'Agriculture', count: 120, percentage: 20 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-on-surface-variant">
                  <span>{item.skill}</span>
                  <span>{item.count} OSY</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-on-surface">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/15 hover:shadow-md transition-shadow">
                <span className={`material-symbols-outlined ${activity.iconColor}`}>{activity.icon}</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    <span className="text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-medium uppercase mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/notifications" className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
            View All Activity
          </Link>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
