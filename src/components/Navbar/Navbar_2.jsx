import React, { useState, useEffect } from "react";
import "./Navbar_2.css";

const Navbar_2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll trigger to show the navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="grain">
          <div className="intro">
            <div className="center">
              <div className="core"></div>
              <div className="outer_one">
                {[...Array(36)].map((_, index) => (
                  <div key={index} className="outer_one__piece"></div>
                ))}
              </div>
              {/* Navigation UI */}
              <div className="pieces">
                <div className="future_ui__piece">
                  <span>Warp drive</span>
                </div>
                <div className="future_ui__piece">
                  <span>Teleport</span>
                </div>
                <div className="future_ui__piece">
                  <span>Fusion core</span>
                </div>
                <div className="future_ui__piece">
                  <span>Laser target</span>
                </div>
                <div className="future_ui__piece">
                  <span>Shields</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar_2;
