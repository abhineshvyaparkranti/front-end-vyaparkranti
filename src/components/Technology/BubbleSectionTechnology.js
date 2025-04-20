import React, { useEffect } from "react";
import "./BubbleSectionTechnology.css"; // Import custom CSS for animation

const BubbleSectionTechnology = () => {
  useEffect(() => {
    const bubbles = document.querySelector(".bubbles");
    for (let i = 0; i < 15; i++) {
      const span = document.createElement("span");
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDuration = `${Math.random() * 5 + 5}s`;
      bubbles.appendChild(span);
    }
  }, []);

  return (
    <div className="position-relative overflow-hidden mt-5">
      {/* Bubble Background */}
      <div className="bubbles"></div>

      {/* Content */}
      <div className="bg-gradient-custom text-white rounded p-5 text-center position-relative z-1">
        <div className="container">
          <h2 className="h1 mb-3">Ready to transform your IT infrastructure?</h2>
          <p className="lead mb-4">
            Connect with our experts to discuss how our services can help your business grow
          </p>
          <button className="btn btn-light btn-lg px-4 fw-bold">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default BubbleSectionTechnology;