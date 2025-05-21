export default function Hero({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Supercharge Your Job Search 🚀</h1>
        <p>
          Create stunning resumes, optimize LinkedIn, and track job applications — all in one smart dashboard.
        </p>
        <div>
          <button 
            className="btn" 
            onClick={onGetStarted}  // Added click handler
          >
            Get Started
          </button>
          <button 
            className="btn" 
            style={{ backgroundColor: '#95a5a6', marginLeft: '10px' }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}