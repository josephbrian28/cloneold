export default function Features() {
  return (
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
  );
}