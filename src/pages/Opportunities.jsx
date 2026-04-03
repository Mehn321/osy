import { useState } from 'react';
import { Link } from 'react-router-dom';

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('Training');

  const opportunities = {
    Training: [
      { id: 1, title: 'NC II Shielded Metal Arc Welding', provider: 'TESDA', duration: '3 Months', status: 'Open', icon: 'construction' },
      { id: 2, title: 'Basic Computer Literacy', provider: 'Barangay Council', duration: '2 Weeks', status: 'Upcoming', icon: 'computer' },
      { id: 3, title: 'Bread and Pastry Production', provider: 'Local Livelihood Center', duration: '1 Month', status: 'Ongoing', icon: 'bakery_dining' },
      { id: 4, title: 'Electronic Products Assembly', provider: 'TESDA', duration: '2 Months', status: 'Open', icon: 'memory' },
    ],
    Employment: [
      { id: 5, title: 'Construction Worker', company: 'Build-Right Inc.', location: 'Poblacion', type: 'Full-time', icon: 'engineering' },
      { id: 6, title: 'Service Crew', company: 'FastFood Co.', location: 'Town Plaza', type: 'Part-time', icon: 'restaurant' },
      { id: 7, title: 'Delivery Rider', company: 'QuickLogistics', location: 'Barangay-wide', type: 'Flexible', icon: 'delivery_dining' },
      { id: 8, title: 'Inventory Assistant', company: 'Local Mart', location: 'Purok 4', type: 'Full-time', icon: 'inventory' },
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-700';
      case 'Upcoming': return 'bg-blue-100 text-blue-700';
      case 'Ongoing': return 'bg-orange-100 text-orange-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Opportunity Hub</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Opportunity Hub: Jobs & Training</h1>
        <p className="text-on-surface-variant">Central portal for training programs and employment vacancies.</p>
      </header>

      <div className="flex gap-4 mb-8 border-b border-outline-variant/30">
        {['Training', 'Employment'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${
              activeTab === tab ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities[activeTab].map((opp) => (
          <div key={opp.id} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex gap-6 items-start hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">{opp.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{opp.title}</h3>
                {opp.status && (
                  <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${getStatusColor(opp.status)}`}>
                    {opp.status}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-on-surface-variant mb-4">
                {opp.provider || opp.company} • {opp.duration || opp.location}
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:shadow-sm transition-all">
                  {activeTab === 'Training' ? 'Enroll Now' : 'Apply Now'}
                </button>
                <button className="px-4 py-2 bg-surface-container-high text-primary text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Opportunities;
