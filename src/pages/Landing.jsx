import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface antialiased flex flex-col min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f9fb]/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-blue-900 bg-clip-text bg-gradient-to-br from-blue-900 to-blue-700">The Civic Horizon</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-tight">
            <button onClick={() => navigate('/')} className="text-blue-900 font-semibold border-b-2 border-blue-600 transition-colors duration-300">Home</button>
            <button className="text-slate-500 hover:text-blue-700 transition-colors duration-300">Community Support</button>
            <button className="text-slate-500 hover:text-blue-700 transition-colors duration-300">Help Center</button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-12 flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <section className="max-w-4xl w-full text-center mb-16 px-6">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase">Official Community Portal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
            Empowering our community, <br/><span className="text-primary-container">one connection at a time.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Choose your path to access specialized training, employment opportunities, and essential community governance tools.
          </p>
        </section>

        {/* Path Selection (Bento Style Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6">
          {/* OSY Path */}
          <div className="relative group flex flex-col justify-between p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden outline outline-1 outline-outline-variant/15">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div>
              <div className="w-14 h-14 rounded-lg bg-primary-fixed flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">person_add</span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-3">Out-of-School Youth (OSY)</h2>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Ready to start your journey? Register as an OSY member to unlock exclusive access to vocational training, job matching, and local youth programs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Skill-based training and certifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Direct links to local job openings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-medium text-on-surface">Community support network access</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => navigate('/registry')}
              className="w-full py-4 px-6 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold tracking-tight hover:opacity-90 active:scale-95 transition-all text-center"
            >
              Start My Self-Registration
            </button>
          </div>

          {/* Staff Path */}
          <div className="relative group flex flex-col justify-between p-8 rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden outline outline-1 outline-outline-variant/15">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
            <div>
              <div className="w-14 h-14 rounded-lg bg-secondary-fixed flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">admin_panel_settings</span>
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-3">Barangay Staff & Admin</h2>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Access official governance tools and community management dashboards. Secure access is granted exclusively through the System Administrator.
              </p>
              <div className="bg-surface-container-highest/50 p-6 rounded-lg mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Request Access Protocol</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-secondary-container text-on-secondary-fixed text-[10px] px-2 py-1 rounded font-bold shrink-0">1</span>
                    <p className="text-xs text-on-surface-variant">Submit your official credentials and Barangay appointment letter to your lead administrator.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-secondary-container text-on-secondary-fixed text-[10px] px-2 py-1 rounded font-bold shrink-0">2</span>
                    <p className="text-xs text-on-surface-variant">Await verification from the System Administrator for role assignment and security clearance.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-secondary-container text-on-secondary-fixed text-[10px] px-2 py-1 rounded font-bold shrink-0">3</span>
                    <p className="text-xs text-on-surface-variant">Receive your unique Horizon ID and temporary password via your registered official email.</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-4 px-6 rounded-lg bg-surface-container-high text-primary font-bold tracking-tight hover:bg-secondary-fixed transition-all text-center"
            >
              Sign In as Admin
            </button>
          </div>
        </div>

        {/* Benefits/Pulse Section */}
        <section className="max-w-6xl w-full mt-24 px-6">
          <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline mb-12">The Civic Horizon Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full mb-4 text-primary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-1">500+</h3>
              <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Active Job Postings</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full mb-4 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-1">24</h3>
              <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Training Centers</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full mb-4 text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-1">12k+</h3>
              <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Enrolled Members</p>
            </div>
          </div>
        </section>

        {/* Graphic Element */}
        <div className="mt-20 w-full max-w-6xl h-64 rounded-2xl overflow-hidden shadow-2xl">
          <img
            alt="Community Empowerment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBftmEJHVLZjgCAtFAaCe6cw_vuf5EXD-avaWISpEv6TuH1aGG1Qj1dmdfpnRRpR7SpfZXxWKO8tu3fWEDarK4cDxC4fwz7zZpjsqUsBnaE36sswtp9N_HDxeNhvkMbqtwATLVNOeMrQ720kAphzM4Zzfphf-eEmpWFHFI-9hPJUEFkitqW4VC44ZNtDxKdc7piZiJSHIuIsDW1QUNTDqkCC8ZYfchiQtFn0SoF4HdC03TYOe3Ls5kl0iS_9AXbneTUdcZvcO7z330e"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-200/10 bg-[#f8f9fb]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto w-full gap-4">
          <p className="text-xs font-inter text-slate-500 uppercase tracking-widest">© 2024 The Civic Horizon. Digital Governance for the Community.</p>
          <div className="flex gap-6">
            <a className="text-xs font-inter text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-all" href="#">Privacy Policy</a>
            <a className="text-xs font-inter text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-all" href="#">Terms of Service</a>
            <a className="text-xs font-inter text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-all" href="#">Barangay Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
