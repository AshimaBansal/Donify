import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const handleFindBlood = () => {
    navigate('/find-match');
  };
  const handleRegisterDonor = () => {
    navigate('/register');
  };

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <img src="/hero.png" alt="Donify Hero" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Blood when
              <br />
              it matters.
              <br />
              <span>Found in seconds.</span>
            </h1>
            <p className="hero-desc">
              Connecting donors and those in need.
              <br />
              Because every drop can save a life.
            </p>
            <div className="hero-buttons">
              <button className="find-btn" onClick={handleFindBlood}>
                Find Blood Now →
              </button>
              <button className="donor-btn" onClick={handleRegisterDonor}>
                Register as Donor
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-icon">🩸</div>
                <h3>98K+</h3>
                <p>Total Donors</p>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-icon">❤️</div>
                <h3>2.4K+</h3>
                <p>Active Requests</p>
              </div>
              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <div className="hero-stat-icon">👥</div>
                <h3>1.2K+</h3>
                <p>Lives Impacted Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="stat-item">
          <span className="stat-num">318</span>
          <span className="stat-label">Donors</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">24</span>
          <span className="stat-label">Active Requests</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">7</span>
          <span className="stat-label">Helped Today</span>
        </div>
      </section>
      <section className="how-it-works">
        <h2>How can we help you today?</h2>
        <p className="how-sub">
          Whether you need blood or want to donate, we've got you covered.
        </p>
        <div className="how-cards">
          <div className="how-card">
            <div className="how-icon red-icon">🩸</div>
            <h3>View Requests</h3>
            <p>See all active blood requests and help save lives.</p>
          </div>
          <div className="how-card">
            <div className="how-icon blue-icon">👥</div>
            <h3>Find Donors</h3>
            <p>Browse our network of verified blood donors.</p>
          </div>
          <div className="how-card">
            <div className="how-icon green-icon">❤️</div>
            <h3>Become a Donor</h3>
            <p>Register as a donor and save up to 3 lives.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>DONIFY</h2>
          <p>
            Donify is a modern blood donation platform connecting
            donors with people in urgent need. Our mission is to
            make blood accessible quickly, safely, and efficiently.
          </p>
          <div className="footer-socials">
            <span>📘</span>
            <span>📷</span>
            <span>📱</span>
            <span>📞</span>
          </div>
        </div>
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Find Blood</a>
          <a href="#">Become Donor</a>
          <a href="#">Emergency Requests</a>
          <a href="#">About Us</a>
        </div>
        <div className="footer-links-section">
          <h3>Services</h3>
          <a href="#">Blood Donation</a>
          <a href="#">Find Donors</a>
          <a href="#">Hospital Support</a>
          <a href="#">24/7 Emergency</a>
          <a href="#">Community Help</a>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Sonipat, Haryana, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@donify.com</p>
          <button className="footer-btn">
            Become a Donor
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Donify. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Home