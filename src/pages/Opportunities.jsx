import { useState, useMemo } from 'react';

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [sortBy, setSortBy] = useState('Newest First');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Job'); // 'Job' or 'Training'
  const [newOpp, setNewOpp] = useState({
    title: '',
    location: '',
    type: 'Job Opening',
    compensation: '',
    benefits: '',
    certification: '',
    tags: '',
    deadline: '',
    totalSlots: 20
  });

  const [allOpportunities, setAllOpportunities] = useState([
    {
      id: 1,
      type: 'Vocational Training',
      title: 'TESDA NCII Cookery',
      location: 'TESDA-MisOr Hub',
      certification: 'National Certificate II (NCII)',
      tags: ['Culinary Arts', 'Food Safety'],
      slotsFilled: 15,
      totalSlots: 20,
      deadline: 'Oct 24, 2024',
      status: 'Open',
      themeColor: 'tertiary'
    },
    {
      id: 2,
      type: 'Job Opening',
      title: 'Logistics Assistant',
      location: 'Port Logistics Corp.',
      compensation: '₱14,500 - ₱16,000',
      benefits: 'Full HMO',
      tags: ['Inventory', 'Tagalog'],
      slotsFilled: 2,
      totalSlots: 5,
      deadline: 'Nov 05, 2024',
      status: 'Open',
      themeColor: 'primary'
    },
    {
      id: 3,
      type: 'Scholarship',
      title: 'STEM University Grant',
      location: 'City Education Board',
      tags: ['Grade 85+', 'Indigent'],
      slotsFilled: 8,
      totalSlots: 50,
      deadline: 'Nov 15, 2024',
      status: 'Open',
      themeColor: 'secondary'
    },
    {
      id: 4,
      type: 'Vocational Training',
      title: 'Basic Web Design',
      location: 'Digital Arts Institute',
      certification: 'Certificate of Completion',
      tags: ['UI/UX', 'Figma'],
      slotsFilled: 12,
      totalSlots: 12,
      deadline: 'Expired Oct 01, 2024',
      status: 'Closed',
      themeColor: 'tertiary'
    }
  ]);

  const filteredOpportunities = useMemo(() => {
    let filtered = allOpportunities;
    if (activeTab !== 'All') {
      filtered = allOpportunities.filter(opp => {
        if (activeTab === 'Job Openings') return opp.type === 'Job Opening';
        if (activeTab === 'Vocational Training') return opp.type === 'Vocational Training';
        if (activeTab === 'Scholarships') return opp.type === 'Scholarship';
        return true;
      });
    }

    if (sortBy === 'Slots Available') {
      return [...filtered].sort((a, b) => (b.totalSlots - b.slotsFilled) - (a.totalSlots - a.slotsFilled));
    }
    return filtered;
  }, [activeTab, sortBy, allOpportunities]);

  const handleAddOpportunity = (e) => {
    e.preventDefault();
    const opp = {
      id: Date.now(),
      ...newOpp,
      type: modalType === 'Job' ? 'Job Opening' : 'Vocational Training',
      themeColor: modalType === 'Job' ? 'primary' : 'tertiary',
      slotsFilled: 0,
      status: 'Open',
      tags: newOpp.tags.split(',').map(tag => tag.trim())
    };
    setAllOpportunities([opp, ...allOpportunities]);
    setIsModalOpen(false);
    setNewOpp({ title: '', location: '', type: 'Job Opening', compensation: '', benefits: '', certification: '', tags: '', deadline: '', totalSlots: 20 });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this opportunity?')) {
      setAllOpportunities(allOpportunities.filter(opp => opp.id !== id));
    }
  };

  const tabs = [
    { label: 'All Opportunities', value: 'All', icon: null },
    { label: 'Job Openings', value: 'Job Openings', icon: 'work' },
    { label: 'Vocational Training', value: 'Vocational Training', icon: 'model_training' },
    { label: 'Scholarships', value: 'Scholarships', icon: null },
  ];

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
          <button
            onClick={() => { setModalType('Job'); setIsModalOpen(true); }}
            className="px-6 py-3.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">work</span>
            Encode New Job
          </button>
          <button
            onClick={() => { setModalType('Training'); setIsModalOpen(true); }}
            className="px-6 py-3.5 bg-gradient-to-r from-tertiary to-tertiary-container text-white rounded-xl font-bold text-sm shadow-xl shadow-tertiary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">school</span>
            Encode New Training
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Now</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">{allOpportunities.filter(o => o.status === 'Open').length}</span>
            <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Available Slots</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">
              {allOpportunities.reduce((acc, curr) => acc + (curr.totalSlots - curr.slotsFilled), 0)}
            </span>
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

      {/* Tabs & Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex p-1.5 bg-surface-container-low rounded-xl w-full md:w-fit overflow-x-auto">
          {tabs.map((tab, idx) => (
            <div key={tab.value} className="flex items-center">
              {idx > 0 && idx === 1 && <div className="w-px h-6 bg-slate-200/60 my-auto mx-2 hidden md:block"></div>}
              <button
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-2.5 rounded-lg text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.value
                    ? 'font-bold bg-white text-primary shadow-sm'
                    : 'font-medium text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab.icon && <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>}
                {tab.label}
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Sort by:</span>
          <select
            className="border-none bg-surface-container-lowest text-sm font-semibold rounded-lg focus:ring-2 focus:ring-primary/20 py-2 pl-3 pr-10 cursor-pointer shadow-sm appearance-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Newest First</option>
            <option>Deadline</option>
            <option>Slots Available</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredOpportunities.map((opp) => (
          <div
            key={opp.id}
            className={`group bg-surface-container-lowest rounded-xl p-6 relative flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-t-4 ${
              opp.themeColor === 'tertiary' ? 'border-tertiary' : opp.themeColor === 'primary' ? 'border-primary' : 'border-secondary'
            }`}
          >
            <button
              onClick={() => handleDelete(opp.id)}
              className="absolute top-2 right-2 p-2 text-slate-300 hover:text-error opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-symbols-outlined text-sm">delete</span>
            </button>
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                opp.type === 'Vocational Training' ? 'bg-tertiary-fixed text-on-tertiary-fixed' :
                opp.type === 'Job Opening' ? 'bg-primary-fixed text-on-primary-fixed' :
                'bg-secondary-container text-on-secondary-container'
              }`}>
                <span className="material-symbols-outlined text-[12px]">
                  {opp.type === 'Vocational Training' ? 'school' : opp.type === 'Job Opening' ? 'work' : 'school'}
                </span>
                {opp.type}
              </span>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                opp.status === 'Open' ? 'bg-tertiary-fixed-dim/30 text-on-tertiary-fixed' : 'bg-error-container text-error'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${opp.status === 'Open' ? 'bg-on-tertiary-fixed-variant animate-pulse' : 'bg-error'}`}></span>
                {opp.status}
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">{opp.title}</h3>
            <p className="text-sm font-medium text-on-surface-variant mb-4 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                {opp.type === 'Job Opening' ? 'business' : opp.type === 'Vocational Training' ? 'location_on' : 'school'}
              </span>
              {opp.location}
            </p>

            {opp.type === 'Vocational Training' && (
              <div className="mb-6 p-3 bg-tertiary/5 rounded-lg border border-tertiary/10">
                <p className="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1">Certification Reward</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">workspace_premium</span>
                  <span className="text-sm font-bold text-on-surface">{opp.certification}</span>
                </div>
              </div>
            )}

            {opp.type === 'Job Opening' && (
              <div className="mb-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Compensation & Benefits</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                    <span className="text-sm font-bold text-on-surface">{opp.compensation}</span>
                  </div>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-primary/20 font-bold text-primary">{opp.benefits}</span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {opp.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-slate-600">{tag}</span>
              ))}
            </div>

            <div className={`mt-auto space-y-4 ${opp.status === 'Closed' ? 'opacity-75' : ''}`}>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                  <span>{opp.slotsFilled}/{opp.totalSlots} slots filled</span>
                  <span>{Math.round((opp.slotsFilled / opp.totalSlots) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${opp.status === 'Closed' ? 'bg-slate-400' : opp.themeColor === 'tertiary' ? 'bg-tertiary' : 'bg-primary'}`}
                    style={{ width: `${(opp.slotsFilled / opp.totalSlots) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-[18px] ${opp.status === 'Closed' ? 'text-slate-400' : 'text-error'}`}>event</span>
                  <span className="text-xs font-semibold text-on-surface-variant">
                    {opp.status === 'Closed' ? opp.deadline : `Until ${opp.deadline}`}
                  </span>
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
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-primary">Encode New {modalType}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleAddOpportunity} className="p-8 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Title</label>
                <input required className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.title} onChange={e => setNewOpp({...newOpp, title: e.target.value})} placeholder="e.g. Graphic Designer" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location / Company</label>
                <input required className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.location} onChange={e => setNewOpp({...newOpp, location: e.target.value})} placeholder="e.g. Tech Solutions Inc." />
              </div>
              {modalType === 'Job' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Salary Range</label>
                    <input className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.compensation} onChange={e => setNewOpp({...newOpp, compensation: e.target.value})} placeholder="₱15k - 20k" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Benefits</label>
                    <input className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.benefits} onChange={e => setNewOpp({...newOpp, benefits: e.target.value})} placeholder="Full HMO" />
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Certification</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.certification} onChange={e => setNewOpp({...newOpp, certification: e.target.value})} placeholder="National Certificate II" />
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Slots</label>
                  <input type="number" className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.totalSlots} onChange={e => setNewOpp({...newOpp, totalSlots: parseInt(e.target.value)})} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deadline</label>
                  <input type="date" className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.deadline} onChange={e => setNewOpp({...newOpp, deadline: e.target.value})} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tags (comma separated)</label>
                <input className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20" value={newOpp.tags} onChange={e => setNewOpp({...newOpp, tags: e.target.value})} placeholder="IT, Programming, English" />
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4">
                Save Opportunity
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
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
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Opportunities;
