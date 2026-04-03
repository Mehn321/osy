import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Settings</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Settings</h1>
        <p className="text-on-surface-variant">Manage your account and system preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-xl font-bold text-on-surface mb-6">Admin Profile</h2>
            <div className="flex items-center gap-6 mb-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHD4hV9cLuLNRKnCnBgOYvDtLhQNb_UH8VqMX_sfFiQRp4kpOL5S10jT98KHHw00YNqKk-JLf4JOwsG6HHwxFTxsDWQsPZ2NWtKeSi_SWAFT5y9h2fIW9y3g3Sf6YcM_zukcK_PBJoDXRcT064lbF5qvH-KNM5_RObUfEIGtl_d6GRdvBFMdc4g_K9qS-BvpcwVBOL6MNxD1r8BJSFs3GeHXOr9S6fhzVlZGZlHm3oxzDQ1jGuut76zfoqQPLfJNEd8EBnWlPyG8H"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-primary/10"
              />
              <button className="px-4 py-2 bg-surface-container-high text-primary font-bold rounded-lg hover:bg-slate-200 transition-all text-sm">
                Change Photo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase">Full Name</label>
                <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 bg-background border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase">Email Address</label>
                <input type="email" defaultValue="admin@barangay.gov" className="w-full px-4 py-2 bg-background border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:shadow-lg transition-all">
              Save Changes
            </button>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-xl font-bold text-on-surface mb-6">System Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'Email Notifications', desc: 'Receive weekly summary reports via email.', checked: true },
                { label: 'SMS Alerts', desc: 'Get notified when new matches are found.', checked: true },
                { label: 'Dark Mode', desc: 'Switch between light and dark interface themes.', checked: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                  <div>
                    <p className="font-bold text-on-surface">{item.label}</p>
                    <p className="text-xs text-on-surface-variant">{item.desc}</p>
                  </div>
                  <span className={`material-symbols-outlined text-3xl cursor-pointer ${item.checked ? 'text-primary' : 'text-slate-300'}`}>
                    {item.checked ? 'toggle_on' : 'toggle_off'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-error-container/20 p-6 rounded-xl border border-error/10">
            <h3 className="font-bold text-error mb-2">Danger Zone</h3>
            <p className="text-sm text-on-surface-variant mb-4">Actions here are irreversible and may affect all data.</p>
            <button className="w-full py-3 bg-white text-error border border-error/30 font-bold rounded-xl hover:bg-error hover:text-white transition-all">
              Delete All Records
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Settings;
