import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      {/* Welcome Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">Welcome back, Barangay Staff!</h2>
        <p className="text-on-surface-variant font-medium">Monitoring the Out-of-School Youth status and progress in Civic Horizon.</p>
      </div>

      {/* Top Row: Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Total OSY</p>
            <h3 className="text-4xl font-black text-primary">142</h3>
            <p className="text-xs text-tertiary-container font-medium mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +3% from last month
            </p>
          </div>
          <div className="p-3 bg-primary/5 rounded-lg text-primary">
            <span className="material-symbols-outlined text-3xl">groups</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Opportunities</p>
            <h3 className="text-4xl font-black text-primary">12</h3>
            <p className="text-xs text-on-surface-variant font-medium mt-2">Active training & jobs</p>
          </div>
          <div className="p-3 bg-secondary-container/20 rounded-lg text-secondary">
            <span className="material-symbols-outlined text-3xl">work_history</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Matches Made</p>
            <h3 className="text-4xl font-black text-primary">48</h3>
            <p className="text-xs text-tertiary-container font-medium mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">check_circle</span> 8 new matches today
            </p>
          </div>
          <div className="p-3 bg-tertiary-fixed/30 rounded-lg text-tertiary">
            <span className="material-symbols-outlined text-3xl">handshake</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Notifications</p>
            <h3 className="text-4xl font-black text-primary">320</h3>
            <p className="text-xs text-on-surface-variant font-medium mt-2">Sent to residents</p>
          </div>
          <div className="p-3 bg-error-container/20 rounded-lg text-error">
            <span className="material-symbols-outlined text-3xl">campaign</span>
          </div>
        </div>
      </div>

      {/* Mid Row: Charts (Asymmetric Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Bar Chart Simulation */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-lg font-bold text-on-surface">Skill Category Distribution</h4>
            <Link to="/dashboard/reports" className="text-sm font-semibold text-primary flex items-center gap-1">View Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
          </div>
          <div className="flex items-end gap-6 h-64">
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-primary-container/20 rounded-t-lg relative h-[70%] transition-all hover:bg-primary group-hover:scale-105">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">42</div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant text-center">Computer Literacy</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-primary-container/20 rounded-t-lg relative h-[45%] transition-all hover:bg-primary group-hover:scale-105">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">28</div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant text-center">Carpentry</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-primary-container/20 rounded-t-lg relative h-[85%] transition-all hover:bg-primary group-hover:scale-105">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">55</div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant text-center">Cooking/NCII</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4 group">
              <div className="w-full bg-primary-container/20 rounded-t-lg relative h-[30%] transition-all hover:bg-primary group-hover:scale-105">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">17</div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant text-center">Tailoring</span>
            </div>
          </div>
        </div>

        {/* Pie Chart Simulation */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col">
          <h4 className="text-lg font-bold text-on-surface mb-8">OSY Status</h4>
          <div className="flex-1 flex items-center justify-center relative py-4">
            {/* Custom Ring Chart */}
            <div className="w-48 h-48 rounded-full border-[16px] border-surface-container flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-l-transparent -rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-tertiary-fixed-dim border-b-transparent border-r-transparent border-l-transparent rotate-45"></div>
              <div className="text-center">
                <span className="text-2xl font-black text-on-surface">142</span>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Total</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs font-medium">Active/Profiling</span>
              </div>
              <span className="text-xs font-bold">64</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="text-xs font-medium">In Training</span>
              </div>
              <span className="text-xs font-bold">32</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
                <span className="text-xs font-medium">Employed</span>
              </div>
              <span className="text-xs font-bold">46</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Table and Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent Registrations */}
        <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/15 overflow-hidden">
          <div className="p-6 border-b border-surface-container flex justify-between items-center">
            <h4 className="text-lg font-bold text-on-surface">Recent Registrations</h4>
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Purok</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {[
                  { name: 'Juan Dela Cruz', initials: 'JD', purok: 'Purok 4', date: 'Oct 24, 2023', status: 'Verified', statusBg: 'bg-tertiary-fixed-dim/20', statusText: 'text-on-tertiary-fixed-variant' },
                  { name: 'Maria Reyes', initials: 'MR', purok: 'Purok 1', date: 'Oct 23, 2023', status: 'Pending', statusBg: 'bg-secondary-fixed/30', statusText: 'text-on-secondary-fixed-variant' },
                  { name: 'Antonio Santos', initials: 'AS', purok: 'Purok 7', date: 'Oct 22, 2023', status: 'Verified', statusBg: 'bg-tertiary-fixed-dim/20', statusText: 'text-on-tertiary-fixed-variant' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-primary-fixed text-primary' : 'bg-secondary-fixed text-secondary'} flex items-center justify-center font-bold text-xs`}>{row.initials}</div>
                        <span className="text-sm font-semibold">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{row.purok}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 ${row.statusBg} ${row.statusText} text-[10px] font-bold rounded-full uppercase`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
          <h4 className="text-lg font-bold text-on-surface mb-6">Recent Skill Matches</h4>
          <div className="space-y-6">
            {[
              { name: 'Juan Dela Cruz', sub: 'Training in NC II Cookery', score: 85 },
              { name: 'Maria Reyes', sub: 'Office Admin Assistant', score: 92 },
              { name: 'Antonio Santos', sub: 'TESDA Carpentry Course', score: 74 },
            ].map((match, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                    <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${match.score}, 100`} strokeLinecap="round" strokeWidth="3"></circle>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black">{match.score}%</span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold leading-tight">{match.name}</h5>
                  <p className="text-xs text-on-surface-variant">{match.sub}</p>
                </div>
                <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-all opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-surface-container-low text-primary font-bold text-sm rounded-lg hover:bg-surface-container-high transition-colors">
            View All Matches
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
