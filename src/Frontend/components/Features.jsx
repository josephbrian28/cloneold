export default function Features() {
  return (
    <>
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>AI Resume Builder</h3>
              <p>Create polished, tailored resumes using smart suggestions and templates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>LinkedIn Optimizer</h3>
              <p>Analyze and enhance your LinkedIn profile to get noticed by recruiters.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Job Tracker</h3>
              <p>Track your applications and follow up effectively in one dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Results Section */}
      <section className="results">
        <div className="container">
          <h2>Real Results for Job Seekers Like You</h2>
          <p className="results-subtitle">
            More interviews, offers, and a faster path to your next role
          </p>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-icon"></div>
              <h2>500K+</h2>
              <p>Job Seekers Served</p>
            </div>
            <div className="result-card">
              <div className="result-icon"></div>
              <h2>60%</h2>
              <p>Faster Time to Interviews</p>
            </div>
            <div className="result-card">
              <div className="result-icon"></div>
              <h2>2X</h2>
              <p>More Job Offers</p>
            </div>
          </div>
          <div className="results-button">
            <button className="primary-btn">Sign Up For Free</button>
          </div>
        </div>
      </section>
    </>
  );
}