 import React, { useState, useEffect } from 'react';
import { Star, Globe, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import DomainSearch from './DomainSearch';

const Domain = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <Globe className="text-primary" />, title: "Premium .com Domain", desc: "The most trusted and valuable domain extension" },
    { icon: <TrendingUp className="text-success" />, title: "High SEO Value", desc: "Boost your search rankings with a memorable domain" },
    { icon: <Shield className="text-info" />, title: "Secure Transfer", desc: "Safe and protected domain transfer process" },
    { icon: <Clock className="text-warning" />, title: "Instant Setup", desc: "Ready to use immediately after purchase" }
  ];

  return (
    <section>
      <div className="sec-title centered text-center py-5">
        <div className="title text-muted">Domain</div>
        <h2 className="fw-bold">Our Domain Collection</h2>
        <p className="text">
          We take a consultative approach to every client engagement and find actionable<br />
          solutions that help your organization achieve the best outcomes.
        </p>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #d4c4c4 0%,rgb(161, 197, 215) 100%)',
        minHeight: '100vh'
      }}>
        <div className="container py-5">
          <div className={`row align-items-center fade-in-up Rs{isVisible ? 'visible' : ''}`}>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-dark">
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">
                  🔥 Premium Domain Available
                </span>
                <h1 className="domain-heading display-5 fw-bold mb-3"  >
                YourDream<span style={{ color: '#ffd700' }}>Domain</span>.com
                </h1>

                <p className="lead text-muted">
                  Secure this premium, brandable domain name that will elevate your business to new heights.
                  Perfect for startups, enterprises, and innovative companies.
                </p>

                <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="text-decoration-line-through text-muted fs-5">Rs25,000</div>
                      <div className="display-5 fw-bold text-warning">Rs12,500</div>
                      <div className="small text-muted">Limited Time Offer</div>
                    </div>
                    <div className="col-6">
                      <div className="small text-uppercase text-muted mb-2">Offer Expires In:</div>
                      <div className="d-flex justify-content-center gap-2">
                        {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
                          <div key={i} className="bg-dark text-white rounded px-2 py-1">
                            <div className="fw-bold">{timeLeft[unit]}</div>
                            <div className="small">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-warning btn-lg fw-semibold shadow"
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                    🚀 Buy Now - Rs12,500
                  </button>
                  <button className="btn btn-outline-dark btn-lg">
                    📞 Make an Offer
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white shadow rounded-4 p-5 text-center">
                <Globe size={70} className="mb-4 text-warning" />
                <h3 className="fw-bold mb-4">Why This Domain?</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3">
                      <CheckCircle className="text-success mb-2" />
                      <div className="small fw-semibold">Brandable</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-info bg-opacity-10 rounded-3 p-3">
                      <Star className="text-info mb-2" />
                      <div className="small fw-semibold">Memorable</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-warning bg-opacity-10 rounded-3 p-3">
                      <TrendingUp className="text-warning mb-2" />
                      <div className="small fw-semibold">SEO Ready</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-danger bg-opacity-10 rounded-3 p-3">
                      <Shield className="text-danger mb-2" />
                      <div className="small fw-semibold">Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Search Section */}
        <DomainSearch />

        {/* Features Section */}
        <div className="bg-white py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold">Why Choose This Domain?</h2>
              <p className="text-muted">Premium domains are digital real estate that appreciate over time.</p>
            </div>

            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">{feature.icon}</div>
                      <h5 className="card-title">{feature.title}</h5>
                      <p className="card-text text-muted">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Domain;
