import { useState } from 'react';

const MatchingPage = () => {
  const [minScore, setMinScore] = useState(75);

  const employmentMatches = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      purok: "PUROK 4, BARANGAY HORIZON",
      score: 94,
      skills: ["Welding", "Safety protocols"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA84JEAYl6UEpfG1OvGBO9VChlVpB0HWxDVimzwS7ilVyYzDQefBMKtiCiPlvi5zANhoxJHSC5TnHy9DS1x7SYx8SuM5BNkYuuj9O1PLt29zbKqfNR2WXuf_c67FPk2nGzVbuZG7RiECfLQeIegRBv5dSxqdJ4aBzieDfP6zAXECKLrhnCT6waUtzBFFAT6SNFGjgYf3Aqt8t7Q_0Gz4JrEuj7STjd69CHhyIjM3hDkJso8mV7B8XhmdlL07rsHkD6Cudq1P-UMsVCA",
    },
    {
      id: 2,
      name: "Ana Rivera",
      purok: "PUROK 2, BARANGAY HORIZON",
      score: 88,
      skills: ["Welding", "Safety protocols", "Equipment Mgmt"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvvvAcFqXnuCx52Ek1i9uckk5FLVkY9wljfqNqTmwaPS7u3-_9nTy2tjV4vlJXy6b6Qf9dP9fMFMULAdD_QAuENDCC7Qm5MtbWkPUs-d70vFoas5shjHJ1DJlSMUlho5q2pZo5Dlmd7etTyvDhYUCflA4AGEinTS7A952xbTLBuOwlSa4MMjZIIrhBODVgIsK01kqBTa8BqSmF1JIkb3EoDXqHx8TCRTjBTYeI1dFLUnN5W0sUsFsKPEQk9258iyosMXblSUFoVf",
    },
  ];

  const upskillingCandidates = [
    {
      id: 3,
      name: "Maria Santos",
      purok: "PUROK 1, BARANGAY HORIZON",
      score: 82,
      skills: ["Welding"],
      gap: "NC II Safety Certification",
      training: "2-week Safety Compliance Workshop starts June 15",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvvvAcFqXnuCx52Ek1i9uckk5FLVkY9wljfqNqTmwaPS7u3-_9nTy2tjV4vlJXy6b6Qf9dP9fMFMULAdD_QAuENDCC7Qm5MtbWkPUs-d70vFoas5shjHJ1DJlSMUlho5q2pZo5Dlmd7etTyvDhYUCflA4AGEinTS7A952xbTLBuOwlSa4MMjZIIrhBODVgIsK01kqBTa8BqSmF1JIkb3EoDXqHx8TCRTjBTYeI1dFLUnN5W0sUsFsKPEQk9258iyosMXblSUFoVf",
    },
    {
      id: 4,
      name: "Ricardo Bautista",
      purok: "PUROK 7, BARANGAY HORIZON",
      score: 68,
      skills: ["Welding"],
      gap: "Equipment Mgmt",
      training: "Basic Tool Maintenance (TESDA Accredited)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dxW9WQ_lCPrJx9O3OSRavPX-LAwokspC-UqIukX7Afl72IkgxYgLYhB9I3iP9bHHN9-xKstknE9Kk87TJYekOPRm-RPEhCCZJUl3qXdeuya_mopY0ZCY0MVp85dgkznbO3pkmy2T9rS5lTrAHaLZ5K6smLcP6NeKrnDuJ6OP5DuH9Hh99LHsX1XpJWMw0-KS6tnALJsS2QvYl7X95i15UN-Utgpd5A3gHtm9dfgpu2NJdo23N33BEhblx6ywlzYreWXS8srK8fk9",
    },
  ];

  const filteredEmployment = employmentMatches.filter(c => c.score >= minScore);
  const filteredUpskilling = upskillingCandidates.filter(c => c.score >= minScore);

  const handleAction = (action, candidateName) => {
    alert(`${action} action triggered for ${candidateName}`);
  };

  const handleBroadcast = () => {
    alert(`Broadcasting to all ${filteredEmployment.length + filteredUpskilling.length} matched candidates!`);
  };

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <span>Matching Engine</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Skills Alignment Analysis</span>
      </nav>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-2 rounded-xl bg-surface-container-lowest p-8 border border-slate-200/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-8xl">verified</span>
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-on-primary-fixed font-bold text-[10px] tracking-widest uppercase rounded-full mb-4">
              Active Opportunity
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-2">Training in NC II Shielded Metal Arc Welding</h1>
            <p className="text-on-surface-variant max-w-xl mb-6">A government-funded certification program aimed at equipping youth with industrial-grade welding expertise for infrastructure projects.</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>construction</span>
                <span className="font-semibold text-sm">Welding Expertise</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                <span className="font-semibold text-sm">Safety Protocols</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                <span className="font-semibold text-sm">Equipment Mgmt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-primary-container text-white p-8 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl mb-6">Matching Parameters</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium opacity-80">Minimum Match Score</label>
                  <span className="text-2xl font-black">{minScore}%</span>
                </div>
                <input
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                  max="100"
                  min="0"
                  type="range"
                  value={minScore}
                  onChange={(e) => setMinScore(parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">filter_list</span>
                  <span className="text-sm">Skills Density</span>
                </div>
                <span className="material-symbols-outlined">toggle_on</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleBroadcast}
            className="w-full py-4 bg-white text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 active:scale-[0.98] transition-all mt-8"
          >
            <span className="material-symbols-outlined">send</span>
            Broadcast to All Matched
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">Employment Matches</h2>
              <p className="text-sm text-on-surface-variant font-medium">Top candidates ready for immediate placement based on current skills.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-fixed rounded-lg transition-colors">Export Report</button>
            <button className="px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-fixed rounded-lg transition-colors">Sort by Rank</button>
          </div>
        </div>
        <div className="space-y-4">
          {filteredEmployment.length > 0 ? filteredEmployment.map((candidate) => (
            <div key={candidate.id} className="group flex flex-col md:flex-row items-center gap-6 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                  <img
                    alt={candidate.name}
                    className="w-14 h-14 rounded-full bg-slate-100 object-cover border-2 border-white ring-2 ring-primary/10"
                    src={candidate.image}
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-tertiary-fixed-dim rounded-full flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-surface">{candidate.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium tracking-wide">{candidate.purok}</p>
                </div>
              </div>
              <div className="flex-1 flex flex-wrap gap-2 justify-center md:justify-start">
                {candidate.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                    <span className="material-symbols-outlined text-sm font-black">check</span>
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center px-8 border-x border-slate-100 hidden md:flex">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Match Score</span>
                <span className="text-3xl font-black text-primary">{candidate.score}%</span>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleAction('Send SMS/Email', candidate.name)}
                  className="flex-1 md:flex-none px-4 py-2.5 bg-primary text-white font-bold text-sm rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Send SMS/Email
                </button>
                <button className="p-2.5 text-on-surface-variant hover:bg-slate-100 rounded-lg">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          )) : (
            <div className="p-10 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/30">
              <p className="text-on-surface-variant">No candidates match the selected minimum score.</p>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">Upskilling Pathway</h2>
              <p className="text-sm text-on-surface-variant font-medium">AI-suggested training for youth missing 1-2 critical skills.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {filteredUpskilling.length > 0 ? filteredUpskilling.map((candidate) => (
            <div key={candidate.id} className="group flex flex-col md:flex-row items-center gap-6 p-6 bg-surface-container-lowest rounded-xl border-l-4 border-l-primary border border-outline-variant/15 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                  <img
                    alt={candidate.name}
                    className="w-14 h-14 rounded-full bg-slate-100 object-cover border-2 border-white ring-2 ring-primary/10"
                    src={candidate.image}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-surface">{candidate.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium tracking-wide">{candidate.purok}</p>
                </div>
              </div>
              <div className="flex-[1.5] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Current Match: {candidate.score}%</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${candidate.score}%` }}></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map(skill => (
                    <div key={skill} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                      <span className="material-symbols-outlined text-sm font-black">check</span>
                      {skill}
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold rounded-lg border border-orange-200">
                    <span className="material-symbols-outlined text-sm font-black">warning</span>
                    Gap: {candidate.gap}
                  </div>
                </div>
                <a className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline group/link" href="#">
                  <span className="material-symbols-outlined text-sm">school</span>
                  Available: {candidate.training}
                  <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleAction('Recommend Training', candidate.name)}
                  className="flex-1 md:flex-none px-4 py-2.5 bg-primary-container text-white font-bold text-sm rounded-lg hover:bg-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">school</span>
                  Recommend Training
                </button>
                <button
                  onClick={() => handleAction('Send SMS/Email', candidate.name)}
                  className="flex-1 md:flex-none px-4 py-2.5 bg-surface-container-high text-primary font-bold text-sm rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Send SMS/Email
                </button>
              </div>
            </div>
          )) : (
            <div className="p-10 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/30">
              <p className="text-on-surface-variant">No candidates available for upskilling at this threshold.</p>
            </div>
          )}
        </div>
        <div className="flex justify-center pt-6">
          <button className="px-8 py-3 bg-white border border-outline-variant/30 text-on-surface font-semibold rounded-full hover:bg-slate-50 transition-colors shadow-sm">
            View More Candidates
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: 'group', value: '124', label: 'Total Candidates', color: 'bg-primary-fixed', textColor: 'text-primary' },
          { icon: 'verified', value: '18', label: 'Highly Qualified', color: 'bg-tertiary-fixed-dim', textColor: 'text-on-tertiary-fixed' },
          { icon: 'auto_awesome', value: '34', label: 'Upskill Potential', color: 'bg-secondary-fixed', textColor: 'text-on-secondary-fixed' },
          { icon: 'trending_up', value: '82%', label: 'Avg. Score', color: 'bg-primary-container', textColor: 'text-white' },
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl glass-panel border border-white/20 shadow-sm flex flex-col gap-2">
            <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center ${item.textColor} mb-2`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <span className="text-2xl font-black text-primary">{item.value}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{item.label}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default MatchingPage;
