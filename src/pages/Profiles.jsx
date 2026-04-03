import { useNavigate, Link } from 'react-router-dom';

const Profiles = () => {
  const navigate = useNavigate();
  const osyProfiles = [
    { id: 1, name: 'Santos, Ricardo M.', email: 'rsantos.osy@email.com', age: 21, purok: 'Purok 1', skill: 'Automotive', status: 'Active', statusBg: 'bg-tertiary-fixed-dim', statusText: 'text-on-tertiary-fixed', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb1BrMIAZwuxfgJviEZK4G91QPPPQk-YzTloIz8ikZOji8S9Oxrhr3pVjZhdlAVGEG3XvJ0_icdzJlIb4w2UKJCqEwoF0_wSkyDVK5AvvoubyW_DkEDGSJiaTv2OMcd4zBVh13EDftOVDquT8VpFPvxEpuVgD7sXG0nFqcCTEqAn-ec_6uxaIbBzTZ70e1VhImDTq7NUTo57lihUtsZe7x_yNytxDXl284EgkpBs6tjKD8gRTF9bIZLLqv5NHzw6nLJoJLHg4nYA7T' },
    { id: 2, name: 'Dela Cruz, Maria Elena', email: 'm.delacruz@email.com', age: 19, purok: 'Purok 3', skill: 'Culinary', status: 'Employed', statusBg: 'bg-secondary-container', statusText: 'text-on-secondary-container', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh4BXWmBawY9xlmTWEEvC-LrIlT7_tseJA9LhPEQUOwSTlu13IKb6jeqpxfBLnIgCGURu-SvhPkKHWkIbK4-cyvmq6NlM0gdzJKTCdFejIpDBvtBH5FF2prDTF3a7MUBUs_GyrIkArJj-V9Z5p2jJ0mlhP1ibyxMCEWi2kI5yQ35TDQQ195hG69EV1iR-Li5rlTq0mJ4Yzri8CU6LooqKOM6dlKFxXHNngdhU3T_KyNpi6fv5l7guJW54uYc2G9LxWsZf_oUH44Uy3' },
    { id: 3, name: 'Garcia, Roberto L.', email: 'garcia.rob@email.com', age: 17, purok: 'Purok 2', skill: 'IT Support', status: 'Active', statusBg: 'bg-tertiary-fixed-dim', statusText: 'text-on-tertiary-fixed', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVGm19z5I083fELe3-XeX1XowffQl9RBaHpjq5M1hcGBnKJDOXfVNTnGKehVKW7tfhNXwk3_9YxaagXP6s8KOR3vNctQgDrp94vg9ZbHx9axQyfXC_z3_vUvLfVVKJKByZEIYVlsexi3nlTR9DHjok09x2-EeypsnK2KQZTe1vNPLEl4k-RsafMx3Uu1jucxBV4FJO18CAgobvGfGANDuE6cHCrSM5RNrDh7347Ec8b_i9GmaPnw6HLaGt607CejoLTvFfMAP3Gbkm' },
    { id: 4, name: 'Lozano, Patricia C.', email: 'p.lozano@email.com', age: 22, purok: 'Purok 1', skill: 'Hospitality', status: 'Inactive', statusBg: 'bg-error-container', statusText: 'text-on-error-container', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM8MiKd1BCMjdW4BUmVrq7G3GQjws-7LcO9ZocrvHGZFcacqwdLC7jeyfb3yfTHGogmVphj0GcuUCinaO8F4I2NLVyoXiZcX-0Nc95xYft_Mrl376wwqfYl7Q5XG6aZK-MGHvS4BQZFgVcaq1bDz8EZuUy6eazUEbRckM1cGLFA-LHNlGfxg2i6JaJ2iK6JFuOWZECoeA1kkpvevBjJSdYlNW85NCWkIvh7WBCOj56DotdRrJXOj7E7AM1TvhijZNHp18tMsq7FDe9' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-2">
            <span>Directory</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">OSY Profiles</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">OSY Profile Management</h2>
          <p className="text-on-surface-variant mt-1">Manage and track Out-of-School Youth records in your jurisdiction.</p>
        </div>
        <Link to="/dashboard/registry" className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined">person_add</span>
          Add New OSY
        </Link>
      </div>

      {/* Filters Section */}
      <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/15 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Purok / Zone', options: ['All Puroks', 'Purok 1 - Maligaya', 'Purok 2 - Pag-asa', 'Purok 3 - Masagana'] },
            { label: 'Sex / Gender', options: ['All Genders', 'Male', 'Female', 'Other'] },
            { label: 'Education Level', options: ['Any Level', 'Elementary Undergraduate', 'Elementary Graduate', 'High School Undergraduate', 'High School Graduate'] },
            { label: 'Employment Status', options: ['All Status', 'Active', 'Employed', 'In Training', 'Inactive'] },
          ].map((filter) => (
            <div key={filter.label} className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">{filter.label}</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-none rounded-xl py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  {filter.options.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
          <span className="text-sm text-on-surface-variant">Showing <span className="font-bold text-primary">24</span> results found in database.</span>
          <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            Reset Filters
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">
                <th className="px-6 py-4">Profile</th>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Purok</th>
                <th className="px-6 py-4">Primary Skill</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {osyProfiles.map((osy, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <img alt="Profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" src={osy.image} />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface leading-tight">{osy.name}</p>
                    <p className="text-xs text-on-surface-variant">{osy.email}</p>
                  </td>
                  <td className="px-6 py-4 text-on-surface text-sm">{osy.age}</td>
                  <td className="px-6 py-4 text-on-surface text-sm">{osy.purok}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 ${i % 2 === 0 ? 'bg-primary-fixed/30 text-primary' : 'bg-secondary-fixed/30 text-secondary'} rounded-md`}>{osy.skill}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${osy.statusBg} ${osy.statusText}`}>{osy.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => navigate(`/dashboard/profiles/${osy.id}`)}
                      className="p-2 text-primary hover:bg-primary-fixed/20 rounded-lg transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-on-surface-variant">Showing 1 to 10 of 24 entries</span>
          <div className="flex items-center gap-1">
            <button className="p-2 text-on-surface-variant hover:bg-white rounded-lg transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-sm">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant transition-colors">3</button>
            <button className="p-2 text-on-surface-variant hover:bg-white rounded-lg transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Pulse Footer (Asymmetric Layout Example) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="flex-1 space-y-4 z-10">
            <h3 className="text-2xl font-bold">Needs Assessment Pulse</h3>
            <p className="text-primary-container-on leading-relaxed opacity-80">We've identified a 15% increase in youth interested in technical vocational courses this quarter. Consider updating the Opportunity List.</p>
            <div className="flex gap-4">
              <button className="bg-white text-primary px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-blue-50 transition-colors">View Analytics</button>
              <button className="bg-primary-container/40 border border-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-container/60 transition-colors">Download PDF</button>
            </div>
          </div>
          <div className="w-full md:w-48 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center z-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Employability</span>
            <span className="text-4xl font-black mb-2">82%</span>
            <div className="w-full bg-primary-container/50 h-1.5 rounded-full overflow-hidden">
              <div className="bg-tertiary-fixed h-full w-[82%]"></div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/15 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">help</span>
            </div>
            <h4 className="font-bold text-on-surface">Admin Support</h4>
            <p className="text-sm text-on-surface-variant mt-2">Need help with the registration process or data privacy guidelines?</p>
          </div>
          <button className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 hover:gap-3 transition-all">
            Open Help Center
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
