import { useState } from 'react';
import { Link } from 'react-router-dom';

const NotificationTemplates = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Training Invitation', subject: 'New Training Opportunity', body: 'Hi {{name}}, we found a training match for you: {{opportunity}}. Please visit the Barangay Hall to enroll.', type: 'SMS/Email' },
    { id: 2, name: 'Job Match Alert', subject: 'Job Opportunity Found', body: 'Hello {{name}}, a new job opportunity at {{company}} matches your skills. Apply now through the Opportunity Hub!', type: 'Email' },
    { id: 3, name: 'Registration Confirmation', subject: 'Welcome to Barangay OSY', body: 'Hi {{name}}, your profile has been successfully registered. You are now part of our skills matching program.', type: 'SMS' },
    { id: 4, name: 'Skill Upgrade Suggestion', subject: 'Upskill Recommendation', body: 'Hi {{name}}, completing the {{course}} course can increase your matching score by {{percentage}}%. Check it out!', type: 'Email' },
  ]);

  const [editingId, setEditingId] = useState(null);

  return (
    <div className="space-y-10 pb-20">
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link to="/notifications" className="hover:text-primary transition-colors">Notifications</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Notification Templates</span>
      </nav>

      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">Notification Templates</h1>
          <p className="text-on-surface-variant font-medium">Manage standardized messages for youth communication.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:shadow-lg transition-all">
          <span className="material-symbols-outlined">add</span>
          Create Template
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    {template.type === 'SMS' ? 'sms' : template.type === 'Email' ? 'mail' : 'quickreply'}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">{template.name}</h3>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{template.type}</span>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-slate-100 rounded-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-error">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {template.subject && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Subject Line</p>
                  <p className="text-sm font-bold text-on-surface">{template.subject}</p>
                </div>
              )}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 relative">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Message Body</p>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  "{template.body}"
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['name', 'opportunity', 'company', 'course'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white border border-primary/10 text-[10px] font-bold text-primary rounded-md">
                      &#123;&#123;{tag}&#125;&#125;
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Test Template
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10">
        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined">info</span>
          Template Variables Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="font-bold text-sm">&#123;&#123;name&#125;&#125;</p>
            <p className="text-xs text-on-surface-variant">The full name of the OSY candidate.</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm">&#123;&#123;opportunity&#125;&#125;</p>
            <p className="text-xs text-on-surface-variant">Title of the matched training or job.</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm">&#123;&#123;purok&#125;&#125;</p>
            <p className="text-xs text-on-surface-variant">The residential area of the youth.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationTemplates;
