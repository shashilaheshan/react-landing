import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>YourBrand</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Something <span className="highlight">Amazing</span> Today
          </h1>
          <p className="hero-subtitle">
            Transform your ideas into reality with our cutting-edge platform. 
            Join thousands of creators who are already building the future.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Start Free Trial</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>🚀</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Experience blazing fast performance with our optimized platform built for speed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Your data is protected with enterprise-grade security and 99.9% uptime guarantee.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Create stunning experiences with our intuitive design tools and pre-built templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join over 10,000 satisfied customers and start building today.</p>
          <button className="primary-button large">Start Your Journey</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>YourBrand</h3>
              <p>Building the future, one idea at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@yourbrand.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
