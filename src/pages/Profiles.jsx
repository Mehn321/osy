import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const profiles = [
    { id: 1, name: 'Juan Dela Cruz', purok: 'Purok 4', status: 'In Training', skills: ['Welding', 'Safety'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA84JEAYl6UEpfG1OvGBO9VChlVpB0HWxDVimzwS7ilVyYzDQefBMKtiCiPlvi5zANhoxJHSC5TnHy9DS1x7SYx8SuM5BNkYuuj9O1PLt29zbKqfNR2WXuf_c67FPk2nGzVbuZG7RiECfLQeIegRBv5dSxqdJ4aBzieDfP6zAXECKLrhnCT6waUtzBFFAT6SNFGjgYf3Aqt8t7Q_0Gz4JrEuj7STjd69CHhyIjM3hDkJso8mV7B8XhmdlL07rsHkD6Cudq1P-UMsVCA' },
    { id: 2, name: 'Maria Santos', purok: 'Purok 1', status: 'Active', skills: ['Customer Service', 'Food Prep'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvvvAcFqXnuCx52Ek1i9uckk5FLVkY9wljfqNqTmwaPS7u3-_9nTy2tjV4vlJXy6b6Qf9dP9fMFMULAdD_QAuENDCC7Qm5MtbWkPUs-d70vFoas5shjHJ1DJlSMUlho5q2pZo5Dlmd7etTyvDhYUCflA4AGEinTS7A952xbTLBuOwlSa4MMjZIIrhBODVgIsK01kqBTa8BqSmF1JIkb3EoDXqHx8TCRTjBTYeI1dFLUnN5W0sUsFsKPEQk9258iyosMXblSUFoVf' },
    { id: 3, name: 'Ricardo Bautista', purok: 'Purok 7', status: 'Employed', skills: ['Inventory', 'Logistics'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3dxW9WQ_lCPrJx9O3OSRavPX-LAwokspC-UqIukX7Afl72IkgxYgLYhB9I3iP9bHHN9-xKstknE9Kk87TJYekOPRm-RPEhCCZJUl3qXdeuya_mopY0ZCY0MVp85dgkznbO3pkmy2T9rS5lTrAHaLZ5K6smLcP6NeKrnDuJ6OP5DuH9Hh99LHsX1XpJWMw0-KS6tnALJsS2QvYl7X95i15UN-Utgpd5A3gHtm9dfgpu2NJdo23N33BEhblx6ywlzYreWXS8srK8fk9' },
    { id: 4, name: 'Ana Rivera', purok: 'Purok 2', status: 'Active', skills: ['Welding', 'Drafting'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvvvAcFqXnuCx52Ek1i9uckk5FLVkY9wljfqNqTmwaPS7u3-_9nTy2tjV4vlJXy6b6Qf9dP9fMFMULAdD_QAuENDCC7Qm5MtbWkPUs-d70vFoas5shjHJ1DJlSMUlho5q2pZo5Dlmd7etTyvDhYUCflA4AGEinTS7A952xbTLBuOwlSa4MMjZIIrhBODVgIsK01kqBTa8BqSmF1JIkb3EoDXqHx8TCRTjBTYeI1dFLUnN5W0sUsFsKPEQk9258iyosMXblSUFoVf' },
    { id: 5, name: 'Elena Gomez', purok: 'Purok 3', status: 'In Training', skills: ['Hospitality'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvvvAcFqXnuCx52Ek1i9uckk5FLVkY9wljfqNqTmwaPS7u3-_9nTy2tjV4vlJXy6b6Qf9dP9fMFMULAdD_QAuENDCC7Qm5MtbWkPUs-d70vFoas5shjHJ1DJlSMUlho5q2pZo5Dlmd7etTyvDhYUCflA4AGEinTS7A952xbTLBuOwlSa4MMjZIIrhBODVgIsK01kqBTa8BqSmF1JIkb3EoDXqHx8TCRTjBTYeI1dFLUnN5W0sUsFsKPEQk9258iyosMXblSUFoVf' },
    { id: 6, name: 'Pedro Penduko', purok: 'Purok 5', status: 'Active', skills: ['Carpentry'], image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3dxW9WQ_lCPrJx9O3OSRavPX-LAwokspC-UqIukX7Afl72IkgxYgLYhB9I3iP9bHHN9-xKstknE9Kk87TJYekOPRm-RPEhCCZJUl3qXdeuya_mopY0ZCY0MVp85dgkznbO3pkmy2T9rS5lTrAHaLZ5K6smLcP6NeKrnDuJ6OP5DuH9Hh99LHsX1XpJWMw0-KS6tnALJsS2QvYl7X95i15UN-Utgpd5A3gHtm9dfgpu2NJdo23N33BEhblx6ywlzYreWXS8srK8fk9' },
  ];

  const filteredProfiles = profiles.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || p.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-700';
      case 'In Training': return 'bg-orange-100 text-orange-700';
      case 'Employed': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">OSY Profiles</span>
      </nav>

      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">OSY Profiles</h1>
          <p className="text-on-surface-variant">Manage and track out-of-school youth registrations.</p>
        </div>
        <Link to="/registry" className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all">
          <span className="material-symbols-outlined">person_add</span>
          Add New Profile
        </Link>
      </header>

      <section className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Active', 'In Training', 'Employed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filterStatus === status
                    ? 'bg-primary text-white'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.length > 0 ? filteredProfiles.map((profile) => (
          <div key={profile.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant/15 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={profile.image} alt={profile.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" />
                <div>
                  <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{profile.name}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{profile.purok}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${getStatusColor(profile.status)}`}>
                  {profile.status}
                </span>
                {profile.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[10px] font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-outline-variant/10 flex justify-between gap-2">
              <button className="flex-1 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/20">
                View Profile
              </button>
              <button className="px-3 py-2 text-on-surface-variant hover:bg-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
              <button className="px-3 py-2 text-on-surface-variant hover:bg-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-sm">more_vert</span>
              </button>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">person_search</span>
            <p className="text-on-surface-variant font-medium">No profiles found matching your criteria.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Profiles;
