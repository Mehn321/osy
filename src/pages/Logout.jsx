import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center p-12 bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-xl">
        <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-5xl">logout</span>
        </div>
        <h1 className="text-3xl font-extrabold text-primary mb-2">Logged Out</h1>
        <p className="text-on-surface-variant mb-8 font-medium">You have been safely signed out of the Barangay OSY Profiling System.</p>
        <Link
          to="/login"
          className="block w-full py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-lg transition-all"
        >
          Sign In Again
        </Link>
      </div>
    </div>
  );
};

export default Logout;
