import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const OSYRegistry = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    purok: '',
    address: '',
    phone: '',
    email: '',
    educationalAttainment: '',
    reasonForOSY: '',
    skills: [],
    interests: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    alert('OSY Profile registered successfully!');
    navigate('/profiles');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link to="/profiles" className="hover:text-primary transition-colors">OSY Profiles</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">New Registration</span>
      </nav>

      <header className="flex justify-between items-center bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">person_add</span>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary mb-1 tracking-tight">OSY Registry</h1>
            <p className="text-on-surface-variant font-medium">New registration for out-of-school youth profiling.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${step >= i ? 'bg-primary w-8' : 'bg-slate-200'}`}
            />
          ))}
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-xl overflow-hidden">
        <div className="p-10">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-primary">Personal Information</h2>
                <p className="text-sm text-slate-500">Legal details as they appear on official documents.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">First Name</label>
                  <input name="firstName" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" placeholder="Juan" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Last Name</label>
                  <input name="lastName" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" placeholder="Dela Cruz" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Date of Birth</label>
                  <input type="date" name="birthDate" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={formData.birthDate} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Gender</label>
                  <select name="gender" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-primary">Contact & Residency</h2>
                <p className="text-sm text-slate-500">How can we reach them and where do they live?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Purok / Area</label>
                  <select name="purok" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={formData.purok} onChange={handleChange}>
                    <option value="">Select Purok</option>
                    {[1, 2, 3, 4, 5, 6, 7].map(i => <option key={i} value={`Purok ${i}`}>Purok {i}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Mobile Number</label>
                  <input name="phone" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" placeholder="0912 345 6789" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Home Address</label>
                  <input name="address" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" placeholder="House No., Street Name, Barangay Horizon" value={formData.address} onChange={handleChange} />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-primary">Education & Background</h2>
                <p className="text-sm text-slate-500">Academic history and skills identification.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Educational Attainment</label>
                  <select name="educationalAttainment" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={formData.educationalAttainment} onChange={handleChange}>
                    <option value="">Select Level</option>
                    <option value="Elementary Graduate">Elementary Graduate</option>
                    <option value="High School Undergraduate">High School Undergraduate</option>
                    <option value="High School Graduate">High School Graduate</option>
                    <option value="Senior High School Graduate">Senior High School Graduate</option>
                    <option value="Vocational">Vocational</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Reason for OSY</label>
                  <select name="reasonForOSY" required className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={formData.reasonForOSY} onChange={handleChange}>
                    <option value="">Select Reason</option>
                    <option value="Financial Difficulties">Financial Difficulties</option>
                    <option value="Lack of Interest">Lack of Interest</option>
                    <option value="Early Pregnancy / Parenthood">Early Pregnancy / Parenthood</option>
                    <option value="Distance from School">Distance from School</option>
                    <option value="Employment Necessity">Employment Necessity</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Current Skills (Comma separated)</label>
                  <input name="skills" className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:ring-4 focus:ring-primary/10 transition-all font-medium" placeholder="Welding, Driving, Cooking..." />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-slate-50 p-8 border-t border-slate-100 flex justify-between gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={step === 1}
            className={`px-8 py-3 font-bold rounded-xl flex items-center gap-2 transition-all ${step === 1 ? 'text-slate-300 bg-slate-100' : 'text-primary hover:bg-white border border-primary/20 hover:shadow-md'}`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:shadow-lg active:scale-95 transition-all shadow-md shadow-primary/20"
            >
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
            <button
              type="submit"
              className="px-10 py-3 bg-tertiary-fixed-dim text-on-tertiary-fixed font-black rounded-xl flex items-center gap-2 hover:shadow-xl active:scale-95 transition-all shadow-md"
            >
              Register Profile
              <span className="material-symbols-outlined">check_circle</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OSYRegistry;
