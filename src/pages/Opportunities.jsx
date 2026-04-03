const Opportunities = () => {
  return (
    <div className="flex-1 space-y-10">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <nav className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant tracking-wider uppercase mb-2">
            <span>Main</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Opportunities</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">Opportunity Management</h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">Curate and manage vocational training, employment roles, and scholarships for the youth community.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">work</span>
            Encode New Job
          </button>
          <button className="px-6 py-3.5 bg-gradient-to-r from-tertiary to-tertiary-container text-white rounded-xl font-bold text-sm shadow-xl shadow-tertiary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">school</span>
            Encode New Training
          </button>
        </div>
      </div>

      {/* Dashboard Stats (Glassmorphism) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Now</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">24</span>
            <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Available Slots</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">142</span>
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">person_add</span>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Closing Soon</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-error">03</span>
            <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-error">
              <span className="material-symbols-outlined">alarm</span>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Success Rate</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-on-tertiary-fixed-variant">92%</span>
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Track Differentiated Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex p-1.5 bg-surface-container-low rounded-xl w-full md:w-fit overflow-x-auto">
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold bg-white text-primary shadow-sm transition-all whitespace-nowrap">All Opportunities</button>
          <div className="w-px h-6 bg-slate-200/60 my-auto mx-2 hidden md:block"></div>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-[18px]">work</span>
            Job Openings
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-[18px]">model_training</span>
            Vocational Training
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary transition-all whitespace-nowrap">Scholarships</button>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Sort by:</span>
          <select className="border-none bg-surface-container-lowest text-sm font-semibold rounded-lg focus:ring-2 focus:ring-primary/20 py-2 pl-3 pr-10 cursor-pointer shadow-sm appearance-none">
            <option>Newest First</option>
            <option>Deadline</option>
            <option>Slots Available</option>
          </select>
        </div>
      </div>

      {/* Opportunity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Vocational Training */}
        <div className="group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-t-4 border-tertiary">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">school</span>
              Vocational Training
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed-dim/30 text-on-tertiary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant animate-pulse"></span>
              Open
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">TESDA NCII Cookery</h3>
          <p className="text-sm font-medium text-on-surface-variant mb-4 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            TESDA-MisOr Hub
          </p>
          <div className="mb-6 p-3 bg-tertiary/5 rounded-lg border border-tertiary/10">
            <p className="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1">Certification Reward</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[20px]">workspace_premium</span>
              <span className="text-sm font-bold text-on-surface">National Certificate II (NCII)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Culinary Arts</span>
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Food Safety</span>
          </div>
          <div className="mt-auto space-y-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <span>15/20 slots filled</span>
                <span>75%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-error">event</span>
                <span className="text-xs font-semibold text-on-surface-variant">Until Oct 24, 2024</span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors" title="View Matches">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors" title="Edit">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Job Opening */}
        <div className="group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-t-4 border-primary">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-primary-fixed text-on-primary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">work</span>
              Job Opening
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed-dim/30 text-on-tertiary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant animate-pulse"></span>
              Open
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">Logistics Assistant</h3>
          <p className="text-sm font-medium text-on-surface-variant mb-4 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">business</span>
            Port Logistics Corp.
          </p>
          <div className="mb-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Compensation & Benefits</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                <span className="text-sm font-bold text-on-surface">₱14,500 - ₱16,000</span>
              </div>
              <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-primary/20 font-bold text-primary">Full HMO</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Inventory</span>
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Tagalog</span>
          </div>
          <div className="mt-auto space-y-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <span>2/5 slots filled</span>
                <span>40%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-slate-400">event</span>
                <span className="text-xs font-semibold text-on-surface-variant">Until Nov 05, 2024</span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Scholarship */}
        <div className="group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container">Scholarship</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed-dim/30 text-on-tertiary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant"></span>
              Open
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">STEM University Grant</h3>
          <p className="text-sm font-medium text-on-surface-variant mb-6 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">school</span>
            City Education Board
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Grade 85+</span>
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Indigent</span>
          </div>
          <div className="mt-auto space-y-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <span>8/50 slots filled</span>
                <span>16%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '16%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-slate-400">event</span>
                <span className="text-xs font-semibold text-on-surface-variant">Until Nov 15, 2024</span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Another Vocational Training */}
        <div className="group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-t-4 border-tertiary">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">school</span>
              Vocational Training
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-error-container text-error">
              <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
              Closed
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">Basic Web Design</h3>
          <p className="text-sm font-medium text-on-surface-variant mb-4 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">computer</span>
            Digital Arts Institute
          </p>
          <div className="mb-6 p-3 bg-tertiary/5 rounded-lg border border-tertiary/10 opacity-60">
            <p className="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1">Certification Reward</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[20px]">workspace_premium</span>
              <span className="text-sm font-bold text-on-surface">Certificate of Completion</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">UI/UX</span>
            <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">Figma</span>
          </div>
          <div className="mt-auto space-y-4 opacity-75">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <span>12/12 slots filled</span>
                <span>100%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-slate-400">event</span>
                <span className="text-xs font-semibold text-on-surface-variant">Expired Oct 01, 2024</span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Quick Encode placeholder */}
        <div className="group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-2 border-primary/5 border-dashed">
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary-fixed group-hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <div>
              <p className="font-bold text-slate-600">Quick Encode</p>
              <p className="text-xs text-slate-400">Draft a small-scale role</p>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1.5 rounded-lg border border-primary/20 text-[10px] font-bold text-primary hover:bg-primary/5">Job</button>
              <button className="px-3 py-1.5 rounded-lg border border-tertiary/20 text-[10px] font-bold text-tertiary hover:bg-tertiary/5">Training</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Community Pulse */}
      <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-900 to-primary-container text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">Empowering the <br/>Next Generation</h2>
            <p className="text-primary-fixed/80 leading-relaxed mb-6">Our system has successfully matched 450+ youth members to sustainable career paths this year. Keep expanding the horizon by adding more opportunities.</p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/10">
                <p className="text-2xl font-bold">1.2k</p>
                <p className="text-[10px] uppercase font-bold text-primary-fixed/60">Active OSYs</p>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/10">
                <p className="text-2xl font-bold">88%</p>
                <p className="text-[10px] uppercase font-bold text-primary-fixed/60">Skills Match</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <img
              alt="Collaborative meeting"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmDP58l6kOkIG9E_hnnIUSR9i8mGRIVjSBpMDiWme9_XduzL7P8iSDjgDRN_-LIdSnTmfXpmuRcYjSU7pDUXFVRk5-Sl1i-2Q9L9hmN-zDoH1xHwCT7qsqYAyADlsZFVK04d_Oe1STfDHZNkvCARlfCZ9J-AbYsAV3Njrt0RrvJneyX9z6hCwVll-cn1xUhhDbMH7IKPh60GSUXX7YYjDrTOp31kmHIezk8ZsSvxvRlPUc7RxxTFyPxyBIqPJ5DXl-l0zJ4pTwiXy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </div>
        </div>
        {/* Abstract visual element */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Opportunities;
