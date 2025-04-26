import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyCulture.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const CompanyCulture = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [visibleSection, setVisibleSection] = useState('');

  // Animation trigger on component mount
  useEffect(() => {
    setVisibleSection('values');
    
    // Set initial active value after a slight delay
    const timer = setTimeout(() => {
      setActiveValue(0);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Mock data for company values
   const companyValues = [
  {
    id: 1,
    title: "Innovation",
    description: "We challenge conventional thinking and embrace new ideas to drive meaningful change.",
    icon: "💡",
    color: "#6366f1"
  },
  {
    id: 2,
    title: "Collaboration",
    description: "We believe great things happen when we work together across teams and perspectives.",
    icon: "🤝",
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "Ownership",
    description: "We take responsibility for our work and empower each other to make decisions.",
    icon: "🚀",
    color: "#f97316"
  },
  {
    id: 4,
    title: "Balance",
    description: "We prioritize well-being and support sustainable work-life harmony for long-term success.",
    icon: "⚖️",
    color: "#14b8a6"
  },
  {
    id: 5,
    title: "Integrity",
    description: "We act with honesty, transparency, and ethical responsibility in everything we do.",
    icon: "🛡️",
    color: "#0ea5e9"
  },
  {
    id: 6,
    title: "Customer Focus",
    description: "We listen attentively to our customers and deliver value that exceeds their expectations.",
    icon: "👂",
    color: "#ec4899"
  }
];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The culture here is unlike anywhere I've worked before. I feel valued as a whole person, not just for what I produce.",
      name: "Sarah Johnson",
      position: "Product Designer",
      avatar: "/api/placeholder/60/60",
      department: "Design Team"
    },
    {
      id: 2,
      quote: "What I appreciate most is how we're encouraged to experiment and learn from failures. It's not just talk—it's built into how we work.",
      name: "David Chen",
      position: "Senior Developer",
      avatar: "/api/placeholder/60/60",
      department: "Engineering"
    },
    {
      id: 3,
      quote: "The mentorship and growth opportunities have transformed my career. I've developed skills I never thought possible.",
      name: "Aisha Patel",
      position: "Marketing Specialist",
      avatar: "/api/placeholder/60/60",
      department: "Marketing"
    }
  ];

  // Mock data for culture events
  const cultureEvents = [
    {
      id: 1,
      title: "Quarterly Hackathons",
      description: "48-hour innovation sprints where teams build creative solutions to real problems.",
      image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
      frequency: "Quarterly"
    },
    {
      id: 2,
      title: "Wellness Wednesdays",
      description: "Mid-week yoga, meditation, and wellness workshops to recharge and refocus.",
      image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
      frequency: "Weekly"
    },
    {
      id: 3,
      title: "Global Volunteer Day",
      description: "Teams worldwide give back to their communities through organized volunteer efforts.",
      image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
      frequency: "Annually"
    },
    {
      id: 4,
      title: "Learning Lunches",
      description: "Brown bag sessions where team members share expertise and new skills.",
      image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
      frequency: "Bi-weekly"
    }
  ];

  return (
    <div className="cc-container">
      <div className="container py-5">
        {/* Header */}
        <div className="cc-header text-center mb-5">
          {/* <h1 className="cc-main-title">Our Culture</h1> */}
           <SectionTitle subTitle={' Our Values'} />
          <p className="cc-subtitle">
            We're building more than a company — we're creating a community where talented people thrive.
          </p>
        </div>

        {/* Navigation */}
        {/* <div className="cc-navigation mb-5">
          <div className="cc-nav-container">
            <button 
              className={`cc-nav-item ${visibleSection === 'values' ? 'active' : ''}`}
              onClick={() => setVisibleSection('values')}
            >
              Our Values
            </button>
              <button 
              className={`cc-nav-item ${visibleSection === 'stories' ? 'active' : ''}`}
              onClick={() => setVisibleSection('stories')}
            >
              Team Stories
            </button>
            <button 
              className={`cc-nav-item ${visibleSection === 'events' ? 'active' : ''}`}
              onClick={() => setVisibleSection('events')}
            >
              Culture Events
            </button> 
          </div>
        </div> */}

        {/* Values Section */}
        {visibleSection === 'values' && (
          <div className="cc-values-section">
            <div className="cc-values-container">
              <div className="row">
                {companyValues.map((value, index) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={value.id}>
                    <div 
                      className={`cc-value-card ${activeValue === index ? 'active' : ''}`}
                      onClick={() => setActiveValue(index)}
                      style={{
                        '--accent-color': value.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="cc-value-icon">{value.icon}</div>
                      <h3 className="cc-value-title">{value.title}</h3>
                      <p className="cc-value-description">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cc-values-banner my-5">
              <div className="cc-banner-content">
                <h2>Living Our Values Every Day</h2>
                <p>
                  Our values aren't just words on a wall — they guide our decisions,
                  shape our products, and define how we work together.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Team Stories Section */}
        {visibleSection === 'stories' && (
          <div className="cc-stories-section">
            <div className="cc-stories-intro text-center mb-5">
              <h2 className="cc-section-title">Voices from Our Team</h2>
              <p className="cc-section-description">
                Hear directly from our team members about what makes our culture special.
              </p>
            </div>

            <div className="cc-testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  className="cc-testimonial-card" 
                  key={testimonial.id}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="cc-testimonial-quote">
                    <span className="cc-quote-mark">"</span>
                    {testimonial.quote}
                    <span className="cc-quote-mark">"</span>
                  </div>
                  <div className="cc-testimonial-person">
                    <div className="cc-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="cc-person-details">
                      <h4 className="cc-person-name">{testimonial.name}</h4>
                      <p className="cc-person-position">{testimonial.position}</p>
                      <span className="cc-person-department">{testimonial.department}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cc-join-banner mt-5">
              <div className="cc-join-content">
                <h3>Want to be part of our story?</h3>
                <p>We're always looking for passionate people to join our team.</p>
                <button className="cc-join-button">View Open Positions</button>
              </div>
            </div>
          </div>
        )}

        {/* Culture Events Section */}
        {visibleSection === 'events' && (
          <div className="cc-events-section">
            <div className="cc-events-intro text-center mb-5">
              <h2 className="cc-section-title">How We Come Together</h2>
              <p className="cc-section-description">
                Building connections and celebrating achievements are central to our culture.
              </p>
            </div>

            <div className="row">
              {cultureEvents.map((event, index) => (
                <div className="col-md-6 col-lg-3 mb-4" key={event.id}>
                  <div 
                    className="cc-event-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="cc-event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="cc-event-frequency">{event.frequency}</div>
                    </div>
                    <div className="cc-event-content">
                      <h3 className="cc-event-title">{event.title}</h3>
                      <p className="cc-event-description">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cc-culture-video mt-5">
              <div className="cc-video-container">
                <div className="cc-video-placeholder">
                  <div className="cc-play-button">
                    <span>▶</span>
                  </div>
                  <img src="https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg" alt="Culture video thumbnail" />
                </div>
                <div className="cc-video-caption">
                  <h3>Experience our culture in action</h3>
                  <p>Take a peek inside our offices and events around the world.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        {/* <div className="cc-culture-cta mt-5">
          <div className="cc-cta-content">
            <h2 className="cc-cta-title">Want to learn more about our culture?</h2>
            <p className="cc-cta-description">
              Connect with our team to discover what makes working here special.
            </p>
            <div className="cc-cta-buttons">
              <button className="cc-cta-primary">Join Our Team</button>
              <button className="cc-cta-secondary">Follow Our Journey</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyCulture;