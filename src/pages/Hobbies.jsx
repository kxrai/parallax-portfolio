import React, { useEffect } from 'react';
import '../styles/hobbies.css';
import Navbar_2 from '../components/Navbar/Navbar_2';

const Hobbies = () => {
  // Lock the body scroll when this component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    document.body.style.height = '100vh'; // Lock height

    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling on unmount
      document.body.style.height = 'auto'; // Reset height
    };
  }, []);

  return (
    <div className="hobbies-page">
      <Navbar_2 />
      {/* Background */}
      <div className="background-container"></div>

      {/* Model Overlay */}
      <div className="model"></div>

      {/* 3D Slider */}
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 }}>
          <div className="item" style={{ '--position': 1 }}>
            <img src="/hobby_images/guitar.png" alt="Guitar" />
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img src="/hobby_images/piano.png" alt="Piano" />
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img src="/hobby_images/snowboarding.png" alt="Snowboarding" />
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <img src="/hobby_images/basketball.png" alt="Basketball" />
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img src="/hobby_images/hockey.png" alt="Hockey" />
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img src="/hobby_images/coding.png" alt="Coding" />
          </div>
          <div className="item" style={{ '--position': 7 }}>
            <img src="/hobby_images/web_dev.png" alt="Web Dev" />
          </div>
          <div className="item" style={{ '--position': 8 }}>
            <img src="/hobby_images/art.png" alt="Art" />
          </div>
          <div className="item" style={{ '--position': 9 }}>
            <img src="/hobby_images/reading.png" alt="Reading" />
          </div>
          <div className="item" style={{ '--position': 10 }}>
            <img src="/hobby_images/league.png" alt="League" />
          </div>
        </div>

        {/* Content Section */}
        <div className="content">
          <div className="hobbies-title">
            <h1>MY HOBBIES</h1>
          </div>
          {/* <div className="author-details">
            <h2>Alicia Loi</h2>
            <p>Web Development & UI Design</p>
            <ul>
              <li>Playing Guitar & Piano</li>
              <li>Video Games & Art</li>
              <li>Sports: Basketball, Swimming, Snowboarding</li>
              <li>Traveling</li>
              <li>3D Visualization</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
