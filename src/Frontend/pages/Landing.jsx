import React, { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthForm"; // Add this import

export default function Landing() {
  const [showAuth, setShowAuth] = useState(false);

  // Function to open the modal
  const handleGetStarted = () => {
    setShowAuth(true);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Pass the handler as prop to Hero */}
      <Hero onGetStarted={handleGetStarted} />

      <Features />
      <Footer />

      {/* Conditionally render the AuthForm modal */}
      {showAuth && <AuthForm onClose={() => setShowAuth(false)} />}
    </div>
  );
}