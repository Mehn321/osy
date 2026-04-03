import { Link } from 'react-router-dom';

const Help = () => {
  const faqs = [
    { q: 'How do I add a new OSY profile?', a: 'Go to the OSY Profiles page and click the "Add New Profile" button at the top right.' },
    { q: 'What is the Matching Score?', a: 'It is an AI-calculated percentage based on how well an OSY\'s skills align with an opportunity\'s requirements.' },
    { q: 'How do I generate a report?', a: 'Navigate to the Reports page, select a report type, and click "Download PDF".' },
    { q: 'Can I send SMS notifications?', a: 'Yes, in the Matching Engine or Profiles page, use the "Send SMS/Email" button to communicate directly with youth.' },
  ];

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-2">
        <Link to="/" className="hover:text-primary transition-colors">Barangay OSY</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary">Help Center</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Help Center</h1>
        <p className="text-on-surface-variant">Find answers and learn how to use the profiling system.</p>
      </header>

      <section className="max-w-3xl space-y-6">
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm">
          <h2 className="text-xl font-bold text-on-surface mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">help_outline</span>
                  {faq.q}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-container text-white p-8 rounded-xl shadow-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Still need help?</h2>
            <p className="text-on-primary-container opacity-90">Our support team is available Monday to Friday, 8am - 5pm.</p>
          </div>
          <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-opacity-90 transition-all">
            Contact Support
          </button>
        </div>
      </section>
    </>
  );
};

export default Help;
