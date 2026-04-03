import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col bg-mesh font-body">
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-fixed-dim/5 rounded-full blur-3xl"></div>

        <div className="w-full max-w-[1100px] grid md:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl shadow-primary/5 border border-outline-variant/15">
          {/* Left Side: Branding & Context */}
          <div className="hidden md:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
              alt="modern architectural detail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCkBBSwinmG7WeGt64mp-Thovbr6e8IXCmYnohgjPOR7GeOCl2aUN2BAmIB5Oh3b3e9h7PN0YXQQKvNCsT6Y7T18OILsqF9jMpKRf5_LSBRHQtf6xYT-Y7z_cBHecESg2gfBtWd5HPuxZwGw8yJXCvYQ-g21jEycp8nSxIGVGTqA2l7ydrZLxYyq1Si1JRbYpf5JDzT_y0kkEIYWVb3Fn03dK92GjWmkdcxbsWxP_I1xqpy6MEuVax8DX07f3EDQcUbsmb5b4D2jX"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8 text-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                <span className="text-2xl font-bold tracking-tighter">The Civic Horizon</span>
              </div>
              <h1 className="text-4xl font-extrabold text-surface-container-lowest leading-tight tracking-tight mb-4">
                Digital Governance <br/>for the Community.
              </h1>
              <p className="text-primary-fixed/80 text-lg max-w-sm font-medium">
                Securely access the Barangay management portal to streamline public services and resident support.
              </p>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card bg-white/10 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">End-to-End Encryption</p>
                  <p className="text-primary-fixed/70 text-xs">Your administrative data is protected by industry-standard protocols.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-on-surface mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant font-medium">Enter your credentials to manage the horizon.</p>
            </div>
            <form className="space-y-6" onSubmit={handleSignIn}>
              {/* Identity Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="identity">Email or Username</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl group-focus-within:text-primary transition-colors">person</span>
                  </div>
                  <input
                    className="block w-full pl-11 pr-4 py-4 bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg transition-all text-on-surface placeholder:text-outline/50 font-medium"
                    id="identity"
                    name="identity"
                    placeholder="admin.horizon"
                    type="text"
                    required
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="password">Password</label>
                  <a className="text-xs font-bold text-primary hover:text-primary-container transition-colors uppercase tracking-widest" href="#">Forgot Password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl group-focus-within:text-primary transition-colors">lock</span>
                  </div>
                  <input
                    className="block w-full pl-11 pr-12 py-4 bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-lg transition-all text-on-surface placeholder:text-outline/50 font-medium"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center px-1">
                <input className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-low" id="remember-me" name="remember-me" type="checkbox" />
                <label className="ml-3 block text-sm font-medium text-on-surface-variant" htmlFor="remember-me">
                  Keep me logged in on this device
                </label>
              </div>

              {/* Submit CTA */}
              <button className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-surface-container-lowest font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                Sign In to Dashboard
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </form>

            {/* Alternative Journeys */}
            <div className="mt-12 pt-8 border-t border-outline-variant/15 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3 text-center sm:text-left">Community Youth</p>
                  <button
                    onClick={() => navigate('/registry')}
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-tertiary-container/10 border border-tertiary-container/10 rounded-lg text-on-tertiary-fixed-variant font-bold hover:bg-tertiary-container/20 transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">school</span>
                    Register as an OSY
                  </button>
                </div>
                <div className="w-full">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3 text-center sm:text-left">Administration</p>
                  <button className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-surface-container-high border border-outline-variant/20 rounded-lg text-on-surface font-bold hover:bg-surface-variant transition-all">
                    <span className="material-symbols-outlined text-xl">support_agent</span>
                    Contact Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 border-t border-slate-200/10 bg-[#f8f9fb] dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto w-full gap-4">
          <p className="text-xs font-inter text-slate-500 dark:text-slate-400 uppercase tracking-widest">© 2024 The Civic Horizon. Digital Governance for the Community.</p>
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

export default SignIn;
