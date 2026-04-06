import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const OSYRegistry = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    age: '',
    sex: 'Male',
    civilStatus: 'Single',
    purok: 'Purok 1 (San Jose)',
    contactNumber: '',
    email: '',
    govtIdType: '4Ps Beneficiary ID',
    educationalAttainment: '',
    reasonForOSY: '',
    skills: '',
    interests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'birthDate') {
        const age = calculateAge(value);
        newData.age = age;
      }
      return newData;
    });
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return '';
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('OSY Profile registered successfully!');
    navigate('/dashboard/profiles');
  };

  const steps = [
    { id: 1, label: 'Personal Info' },
    { id: 2, label: 'Education' },
    { id: 3, label: 'Skills & Certs' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header & Breadcrumb */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-4 font-medium">
          <Link to="/dashboard/profiles" className="hover:text-primary transition-colors">Registry</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="font-semibold text-primary">New OSY Registration</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">OSY Education & Skills Form</h1>
        <p className="text-on-surface-variant mt-2 max-w-2xl">Complete the three-step profiling system to register a new Out-of-School Youth for social services and skills training programs.</p>
      </div>

      {/* Progress Stepper */}
      <div className="relative flex items-center justify-between mb-12 px-2">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10 translate-y-[-50%]"></div>
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white relative transition-all duration-300 ${step >= s.id ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-surface-container-highest text-on-surface-variant'}`}>
              <span className="font-bold">{s.id}</span>
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider ${step >= s.id ? 'text-primary' : 'text-on-surface-variant'}`}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Registration Form Container */}
      <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/15">
        <div className="p-8">
          {step === 1 && (
            <div className="flex flex-col lg:flex-row gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Left: Profile Upload */}
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="relative group">
                  <div className="w-48 h-48 rounded-xl bg-surface-container overflow-hidden flex items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer group-hover:bg-surface-container-high">
                    <div className="text-center p-6">
                      <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">add_a_photo</span>
                      <p className="text-xs mt-2 font-medium text-on-surface-variant">Upload Official Photo</p>
                    </div>
                  </div>
                  <button type="button" className="absolute -bottom-3 -right-3 bg-primary text-white p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <div className="mt-6 w-full p-4 bg-surface-container-low rounded-xl">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-2">Registration Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs font-semibold text-secondary">Drafting in Progress</span>
                  </div>
                </div>
              </div>

              {/* Right: Fields */}
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Full Name (Last Name, First Name, Middle Initial)</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                      placeholder="e.g. Dela Cruz, Juan P."
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Birthdate</label>
                    <input
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                      type="date"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Age</label>
                    <input
                      name="age"
                      value={formData.age}
                      className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-high text-on-surface-variant font-bold"
                      placeholder="22"
                      readOnly
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Sex</label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all appearance-none font-medium"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Civil Status</label>
                    <select
                      name="civilStatus"
                      value={formData.civilStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all appearance-none font-medium"
                    >
                      <option>Single</option>
                      <option>Married</option>
                      <option>Widowed</option>
                      <option>Solo Parent</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-surface-container-highest pb-2">Address & Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Purok / Area</label>
                      <select
                        name="purok"
                        value={formData.purok}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all appearance-none font-medium"
                      >
                        <option>Purok 1 (San Jose)</option>
                        <option>Purok 2 (Sta. Maria)</option>
                        <option>Purok 3 (Mabini)</option>
                        <option>Purok 4 (Riverside)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Contact Number</label>
                      <div className="flex">
                        <span className="flex items-center px-3 bg-surface-container rounded-l-lg text-sm text-on-surface-variant font-bold border-r border-outline-variant/10">+63</span>
                        <input
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className="flex-1 px-4 py-3 rounded-r-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                          placeholder="917 123 4567"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                        placeholder="juan.dc@email.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-surface-container-highest pb-2">Verification</h3>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Primary Government ID Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['PhilSys (National)', '4Ps Beneficiary ID', 'Voters ID'].map((idType) => (
                        <label
                          key={idType}
                          className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.govtIdType === idType ? 'bg-white border-primary text-primary' : 'bg-surface-container-low border-transparent text-on-surface-variant hover:bg-surface-container'}`}
                        >
                          <input
                            type="radio"
                            name="govtIdType"
                            value={idType}
                            checked={formData.govtIdType === idType}
                            onChange={handleChange}
                            className="absolute opacity-0"
                          />
                          <span className="text-xs font-bold">{idType}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
              <div className="flex-1 space-y-6">
                <div className="pt-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-surface-container-highest pb-2">Educational Background</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Highest Educational Attainment</label>
                      <select
                        name="educationalAttainment"
                        value={formData.educationalAttainment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all appearance-none font-medium"
                        required
                      >
                        <option value="">Select Level</option>
                        <option>Elementary Graduate</option>
                        <option>High School Undergraduate</option>
                        <option>High School Graduate</option>
                        <option>Senior High School Graduate</option>
                        <option>Vocational</option>
                        <option>College Undergraduate</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Primary Reason for being Out-of-School</label>
                      <select
                        name="reasonForOSY"
                        value={formData.reasonForOSY}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all appearance-none font-medium"
                        required
                      >
                        <option value="">Select Reason</option>
                        <option>Financial Difficulties</option>
                        <option>Lack of Interest</option>
                        <option>Early Pregnancy / Parenthood</option>
                        <option>Distance from School</option>
                        <option>Employment Necessity</option>
                        <option>Family Problems</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
              <div className="flex-1 space-y-6">
                <div className="pt-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-surface-container-highest pb-2">Skills & Interests</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Current Skills (e.g. Welding, Driving, Cooking)</label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                        placeholder="List your existing skills..."
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-on-surface-variant">Areas of Interest for Training</label>
                      <textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border-0 bg-surface-container-low focus:ring-2 focus:ring-primary transition-all font-medium"
                        placeholder="What skills would you like to learn?"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Footer */}
        <div className="bg-surface-container-low p-6 flex justify-between items-center border-t border-outline-variant/15">
          <button
            type="button"
            onClick={step === 1 ? () => {} : handlePrev}
            className={`px-6 py-3 font-semibold transition-colors ${step === 1 ? 'text-slate-400 cursor-not-allowed' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {step === 1 ? 'Save as Draft' : 'Previous Step'}
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Next: {step === 1 ? 'Education' : 'Skills & Certs'}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-br from-tertiary to-tertiary-container text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-tertiary/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Register Profile</span>
              <span className="material-symbols-outlined text-sm">check_circle</span>
            </button>
          )}
        </div>
      </form>

      {/* Supportive Content: Bento Style */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-primary mb-2">Program Benefits</h4>
            <p className="text-on-surface-variant text-sm">Registered OSYs automatically qualify for the Barangay Scholarship Program and TESDA Vocation assistance.</p>
          </div>
          <div className="mt-8 flex gap-4">
            <div className="flex-1 p-4 bg-tertiary-fixed-dim/20 rounded-xl">
              <span className="material-symbols-outlined text-tertiary-container mb-2">school</span>
              <p className="text-xs font-bold text-tertiary-container">ALS Enrollment</p>
            </div>
            <div className="flex-1 p-4 bg-secondary-fixed rounded-xl">
              <span className="material-symbols-outlined text-on-secondary-fixed mb-2">work</span>
              <p className="text-xs font-bold text-on-secondary-fixed">Job Referrals</p>
            </div>
            <div className="flex-1 p-4 bg-primary-fixed rounded-xl">
              <span className="material-symbols-outlined text-on-primary-fixed mb-2">medical_services</span>
              <p className="text-xs font-bold text-on-primary-fixed">Health Subsidy</p>
            </div>
          </div>
        </div>
        <div className="bg-primary-container p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="z-10">
            <span className="material-symbols-outlined text-5xl text-on-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <h4 className="text-white font-extrabold text-2xl mb-2">Data Privacy</h4>
            <p className="text-on-primary-container text-xs leading-relaxed">All registration data is handled according to the PH Data Privacy Act of 2012.</p>
            <button type="button" className="mt-6 px-4 py-2 bg-white/10 text-white rounded-lg text-xs font-bold border border-white/20 hover:bg-white/20 transition-all">View Terms</button>
          </div>
        </div>
      </div>

      {/* Floating Info Action */}
      <div className="mt-12 p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-dashed border-primary/20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Auto-Save is Enabled</p>
            <p className="text-xs text-on-surface-variant">Last saved at 10:45 AM</p>
          </div>
        </div>
        <button type="button" className="text-sm font-bold text-primary hover:underline">Manual Save</button>
      </div>
    </div>
  );
};

export default OSYRegistry;
