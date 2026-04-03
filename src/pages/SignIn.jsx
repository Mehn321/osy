import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center overflow-hidden shadow-lg">
              <img
                alt="Barangay Seal"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJMl_GDxSqMVxZsKLdlN8PDTDbruUZkFn4FR-Nyky4TbTxz5ADSTEDD9MbhDvIDmZt8Yv1VwBcdUqXJYdboig0ywaKBiohb4kK_GYuSByquyA5VYH7b9XJpLtsTYNVZ3j4ND0Y7hhe1pw9Qt-X0fVkm2XvAskIZj4z-jAyESL2eWuuNRjJeTyks8G40H5TiKniciPfvQJSFMpIiMLJaBs3aDQWapnQQjGQofxcRkaq_u5C4se0oMD-ilOHLV3wxMKGxkFDDUZhFm_"
              />
            </div>
            <div>
              <h2 className="font-black text-2xl text-primary leading-none">Barangay OSY</h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">Profiling System</p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-on-surface mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant font-medium">Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                <input
                  type="email"
                  required
                  placeholder="admin@barangay.gov.ph"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                <span className="text-on-surface-variant font-semibold group-hover:text-primary transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-primary font-bold hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-on-surface-variant font-medium">
            Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Request access</a>
          </p>
        </div>

        <div className="bg-primary/5 p-6 border-t border-outline-variant/10 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
            Secured by Barangay Civil Defense & IT Services<br/>
            &copy; 2024 Civic Horizon
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
