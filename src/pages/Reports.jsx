import { Link } from 'react-router-dom';

const Reports = () => {
  const reports = [
    { title: 'OSY Profiling Status', description: 'Distribution of registered youth by employment status.', lastGenerated: 'Today', icon: 'analytics' },
    { title: 'Training Placement Success', description: 'Monthly metrics on how many OSY completed training.', lastGenerated: 'Yesterday', icon: 'trending_up' },
    { title: 'Skill Gaps Analysis', description: 'Common missing skills in the barangay ecosystem.', lastGenerated: '3 days ago', icon: 'psychology' },
    { title: 'Employer Feedback Report', description: 'Feedback on OSY placed in local infrastructure projects.', lastGenerated: '1 week ago', icon: 'feedback' },
  ];

  return (
    <div className="space-y-10 pb-20">
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Reporting & Analytics</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Reporting & Analytics</h1>
        <p className="text-on-surface-variant font-medium">Analyze youth progress and program effectiveness through standardized data visualization.</p>
      </header>

      {/* Visual Analytics Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Status Distribution Chart */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-on-surface">Profiling Status Distribution</h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Current Quarter</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Simple SVG Donut Chart */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#00288e" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4edea3" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="188.4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#bbc4f6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="220" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-primary">124</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Total OSY</span>
              </div>
            </div>

            <div className="flex-1 space-y-4 w-full">
              {[
                { label: 'Active / Registered', value: 75, color: 'bg-primary' },
                { label: 'Employed', value: 25, color: 'bg-tertiary-fixed-dim' },
                { label: 'In Training', value: 24, color: 'bg-secondary-fixed-dim' }
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-on-surface-variant">{item.label}</span>
                    </div>
                    <span className="text-primary">{item.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${(item.value/124)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Gap Analysis Bar Chart */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-on-surface">Top Missing Skills</h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Barangay Demand</span>
          </div>

          <div className="space-y-6">
            {[
              { skill: 'NC II Safety Certification', count: 42, color: 'bg-error/80' },
              { skill: 'Basic Welding (SMAW)', count: 35, color: 'bg-primary/80' },
              { skill: 'Hospitality Mgmt', count: 28, color: 'bg-secondary/80' },
              { skill: 'Equipment Maintenance', count: 19, color: 'bg-primary/60' }
            ].map((item) => (
              <div key={item.skill} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-on-surface-variant">{item.skill}</span>
                  <span className="text-sm font-black text-primary">{item.count} OSY</span>
                </div>
                <div className="h-4 w-full bg-slate-50 rounded-lg overflow-hidden flex items-center p-0.5 border border-slate-100">
                  <div
                    className={`h-full ${item.color} rounded-md transition-all duration-1000 group-hover:brightness-110`}
                    style={{ width: `${(item.count/42)*100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.title} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 flex gap-6 items-start hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">{report.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed font-medium">{report.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last generated: {report.lastGenerated}</span>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                  Download PDF
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gradient-to-br from-primary to-primary-container text-white p-10 rounded-3xl shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <span className="material-symbols-outlined text-[160px]">insights</span>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black mb-4">Custom Analysis Engine</h2>
          <p className="text-on-primary-container mb-8 font-medium text-lg leading-relaxed">Generate deep-dive reports on specific demographics, purok-level engagement, or historical placement trends.</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-primary font-black rounded-2xl hover:shadow-xl hover:scale-105 active:scale-95 transition-all shadow-lg">
              Start Configuration
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-black rounded-2xl hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm">
              Schedule Automated Export
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
