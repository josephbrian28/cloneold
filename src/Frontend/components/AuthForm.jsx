import React, { useState, useEffect } from 'react';
import '../styles/auth-form.css';

export default function AuthForm({ onClose }) {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    // Mimic the setTimeout from the original JS to set sign-in by default
    const timer = setTimeout(() => {
      setIsSignIn(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignIn ? 'Sign in submitted' : 'Sign up submitted');
    onClose();
  };

  return (
    <div className="auth-modal1">
      <div className="auth-container1">
        {/* Close Button */}
        <button
          className="auth-close-btn1"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`container1 ${isSignIn ? 'sign-in' : 'sign-up'}`} id="container">
          {/* FORM SECTION */}
          <div className="row1">
            {/* SIGN UP */}
            <div className="col1 align-items-center1 flex-col1 sign-up">
              <div className="form-wrapper1 align-items-center1">
                <div className="form1 sign-up">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group1">
                      <i className="bx bxs-user"></i>
                      <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group1">
                      <i className="bx bx-mail-send"></i>
                      <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-group1">
                      <i className="bx bxs-lock-alt"></i>
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="input-group1">
                      <i className="bx bxs-lock-alt"></i>
                      <input type="password" placeholder="Confirm password" required />
                    </div>
                    <button type="submit">Sign up</button>
                    <button type="button" className="auth-back-btn1" onClick={onClose}>
                      Back
                    </button>
                    <p>
                      <span>Already have an account?</span>
                      <b onClick={toggle} className="pointer1">
                        Sign in here
                      </b>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            {/* END SIGN UP */}
            {/* SIGN IN */}
            <div className="col1 align-items-center1 flex-col1 sign-in">
              <div className="form-wrapper1 align-items-center1">
                <div className="form1 sign-in">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group1">
                      <i className="bx bxs-user"></i>
                      <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group1">
                      <i className="bx bxs-lock-alt"></i>
                      <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Sign in</button>
                    <button type="button" className="auth-back-btn1" onClick={onClose}>
                      Back
                    </button>
                    <p>
                      <b className="pointer1">Forgot password?</b>
                    </p>
                    <p>
                      <span>Don't have an account?</span>
                      <b onClick={toggle} className="pointer1">
                        Sign up here
                      </b>
                    </p>
                  </form>
                </div>
              </div>
              <div className="form-wrapper1"></div>
            </div>
            {/* END SIGN IN */}
          </div>
          {/* END FORM SECTION */}
          {/* CONTENT SECTION */}
          <div className="row1 content-row1">
            {/* SIGN IN CONTENT */}
            <div className="col1 align-items-center1 flex-col1">
              <div className="text1 sign-in">
                <h2>Welcome</h2>
              </div>
              <div className="img1 sign-in"></div>
            </div>
            {/* END SIGN IN CONTENT */}
            {/* SIGN UP CONTENT */}
            <div className="col1 align-items-center1 flex-col1">
              <div className="img1 sign-up"></div>
              <div className="text1 sign-up">
                <h2>Join with us</h2>
              </div>
            </div>
            {/* END SIGN UP CONTENT */}
          </div>
          {/* END CONTENT SECTION */}
        </div>
      </div>
    </div>
  );
}