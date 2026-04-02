const Reports = () => {
  const reports = [
    { title: 'OSY Profiling Status', description: 'Distribution of registered youth by employment status.', lastGenerated: 'Today', icon: 'analytics' },
    { title: 'Training Placement Success', description: 'Monthly metrics on how many OSY completed training.', lastGenerated: 'Yesterday', icon: 'trending_up' },
    { title: 'Skill Gaps Analysis', description: 'Common missing skills in the barangay ecosystem.', lastGenerated: '3 days ago', icon: 'psychology' },
    { title: 'Employer Feedback Report', description: 'Feedback on OSY placed in local infrastructure projects.', lastGenerated: '1 week ago', icon: 'feedback' },
  ];

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <span>Barangay OSY</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Reports & Analytics</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Reports</h1>
        <p className="text-on-surface-variant">Analyze youth progress and program effectiveness.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.title} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex gap-6 items-start hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">{report.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{report.description}</p>
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

      <section className="mt-12 bg-primary-container text-white p-8 rounded-xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined text-[120px]">analytics</span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Custom Report Generator</h2>
          <p className="text-on-primary-container mb-6 font-medium">Select specific filters and parameters to generate a customized analysis of OSY progress in your barangay.</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-opacity-90 active:scale-95 transition-all">
              Start Configuration
            </button>
            <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20">
              Schedule Weekly
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reports;
