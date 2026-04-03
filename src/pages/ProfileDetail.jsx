import { useParams, Link } from 'react-router-dom';

const ProfileDetail = () => {
  const { id } = useParams();

  // Mock data for the detailed view
  const profile = {
    id: 1,
    name: 'Juan Dela Cruz',
    purok: 'Purok 4',
    status: 'In Training',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA84JEAYl6UEpfG1OvGBO9VChlVpB0HWxDVimzwS7ilVyYzDQefBMKtiCiPlvi5zANhoxJHSC5TnHy9DS1x7SYx8SuM5BNkYuuj9O1PLt29zbKqfNR2WXuf_c67FPk2nGzVbuZG7RiECfLQeIegRBv5dSxqdJ4aBzieDfP6zAXECKLrhnCT6waUtzBFFAT6SNFGjgYf3Aqt8t7Q_0Gz4JrEuj7STjd69CHhyIjM3hDkJso8mV7B8XhmdlL07rsHkD6Cudq1P-UMsVCA',
    education: {
      level: 'High School Graduate',
      school: 'Horizon National High School',
      year: '2021',
      reason: 'Financial Difficulties',
    },
    skills: [
      { name: 'Basic Welding', level: 'Intermediate', certified: true, date: 'May 2023' },
      { name: 'Carpentry', level: 'Beginner', certified: false, date: 'N/A' },
      { name: 'Food Prep', level: 'Intermediate', certified: true, date: 'June 2022' },
    ],
    certifications: [
      { title: 'NC I Carpentry', issuer: 'TESDA', year: '2023' },
      { title: 'Food Safety Seminar', issuer: 'LGU', year: '2022' },
    ],
    trainingHistory: [
      { title: 'Basic SMAW Workshop', duration: '2 weeks', status: 'Completed', year: '2023' },
      { title: 'Customer Service 101', duration: '1 week', status: 'Completed', year: '2022' },
    ],
  };

  return (
    <div className="space-y-10 pb-20 max-w-5xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link to="/profiles" className="hover:text-primary transition-colors">OSY Profiles</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Standardized Education & Skills</span>
      </nav>

      <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
        <div className="flex items-center gap-6">
          <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary/10 shadow-lg" />
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-black text-primary">{profile.name}</h1>
              <span className="px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed text-[10px] font-black uppercase rounded-full">Verified Profile</span>
            </div>
            <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm">{profile.purok}, Barangay Horizon</p>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all">
            <span className="material-symbols-outlined text-lg">mail</span>
            Contact
          </button>
          <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-high text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
            <span className="material-symbols-outlined text-lg">print</span>
            Export PDF
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Education Section */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">school</span>
              Educational Attainment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Highest Level</p>
                <p className="font-bold text-on-surface text-lg">{profile.education.level}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">School Attended</p>
                <p className="font-bold text-on-surface text-lg">{profile.education.school}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Year Last Attended</p>
                <p className="font-bold text-on-surface text-lg">{profile.education.year}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Primary Reason for Dropping Out</p>
                <p className="font-bold text-on-surface text-lg">{profile.education.reason}</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">psychology</span>
              Skills Portfolio
            </h2>
            <div className="space-y-6">
              {profile.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-slate-200">
                      <span className="material-symbols-outlined">{skill.name.toLowerCase().includes('welding') ? 'construction' : skill.name.toLowerCase().includes('food') ? 'restaurant' : 'bolt'}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface">{skill.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-on-surface-variant">{skill.level}</span>
                        {skill.certified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-black uppercase rounded-full">Certified</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-slate-400">Last Verified</p>
                    <p className="text-sm font-bold text-on-surface">{skill.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* Certifications Section */}
          <section className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">card_membership</span>
              Certifications
            </h2>
            <div className="space-y-4">
              {profile.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="font-bold text-sm text-primary">{cert.title}</h3>
                  <p className="text-[10px] font-medium text-on-surface-variant uppercase mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Training History Section */}
          <section className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/15 shadow-sm">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">history</span>
              Training History
            </h2>
            <div className="space-y-4">
              {profile.trainingHistory.map((training, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-primary/20 pb-4 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                  <h3 className="font-bold text-sm text-on-surface">{training.title}</h3>
                  <p className="text-[10px] font-medium text-on-surface-variant uppercase mt-1">{training.duration} • {training.year}</p>
                  <span className="mt-2 inline-block px-2 py-0.5 bg-green-50 text-green-700 text-[8px] font-black uppercase rounded-md border border-green-100">
                    {training.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
