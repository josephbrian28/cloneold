import React, { useState } from 'react';
import AuthForm from './authform.jsx';

export default function Hero({ onGetStarted }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const openModal = (signIn) => {
    setIsSignIn(signIn);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="container navbar-container">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#product" className="dropdown-toggle">Product</a>
              <ul className="dropdown-menu">
                <li><a href="#ai-resume-builder">AI Resume Builder</a></li>
                <li><a href="#linkedin-optimizer">LinkedIn Optimizer</a></li>
                <li><a href="#ai-cover-letter">AI Cover Letter</a></li>
                <li><a href="#job-tracker">Job Tracker</a></li>
                <li><a href="#whos-hiring-search">Who's Hiring Search</a></li>
                <li><a href="#all-features">All Features</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#services" className="dropdown-toggle">Services</a>
              <ul className="dropdown-menu">
                <li><a href="#premium-toolkit">Premium Toolkit</a></li>
                <li><a href="#resume-review">Resume Review</a></li>
                <li><a href="#linkedin-makeover">LinkedIn Makeover</a></li>
                <li><a href="#bundled-service">Bundled Service</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#resources" className="dropdown-toggle">Resources</a>
              <ul className="dropdown-menu">
                <li><a href="#actively-hiring-database">Actively Hiring Database</a></li>
                <li><a href="#resume-template">Resume Template</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#interview-guides">Interview Guides</a></li>
                <li><a href="#job-search-tips">Job Search Tips</a></li>
                <li><a href="#chatgpt-guides">ChatGPT Guides</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#help-center">Help Center</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#for-organizations" className="dropdown-toggle">For Organizations</a>
              <ul className="dropdown-menu">
                <li><a href="#overview">Overview</a></li>
                <li><a href="#university-career-centres">University Career Centres</a></li>
                <li><a href="#career-coaches">Career Coaches</a></li>
                <li><a href="#bootcamps">Bootcamps</a></li>
                <li><a href="#workforce-development">Workforce Development</a></li>
                <li><a href="#outplacement">Outplacement</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#company" className="dropdown-toggle">Company</a>
              <ul className="dropdown-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </li>
          </ul>
          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => openModal(true)}>
              LOGIN
            </button>
            <button className="signup-btn" onClick={() => openModal(false)}>
              SIGN UP
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Supercharge Your Job Search 🚀</h1>
          <p>
            Create stunning resumes, optimize LinkedIn, and track job applications — all in one smart dashboard.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn primary-btn" 
              onClick={onGetStarted}
            >
              Get Started
            </button>
            <button 
              className="btn secondary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* AuthForm Modal */}
      {isModalOpen && <AuthForm onClose={closeModal} />}
    </>
  );
}