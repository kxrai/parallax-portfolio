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
            <img src="/hobby_images/dragon_1.jpg" alt="Dragon 1" />
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img src="/hobby_images/dragon_2.jpg" alt="Dragon 2" />
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img src="/hobby_images/dragon_3.jpg" alt="Dragon 3" />
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <img src="/hobby_images/dragon_4.jpg" alt="Dragon 4" />
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img src="/hobby_images/dragon_5.jpg" alt="Dragon 5" />
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img src="/hobby_images/dragon_6.jpg" alt="Dragon 6" />
          </div>
          <div className="item" style={{ '--position': 7 }}>
            <img src="/hobby_images/dragon_7.jpg" alt="Dragon 7" />
          </div>
          <div className="item" style={{ '--position': 8 }}>
            <img src="/hobby_images/dragon_8.jpg" alt="Dragon 8" />
          </div>
          <div className="item" style={{ '--position': 9 }}>
            <img src="/hobby_images/dragon_9.jpg" alt="Dragon 9" />
          </div>
          <div className="item" style={{ '--position': 10 }}>
            <img src="/hobby_images/dragon_10.jpg" alt="Dragon 10" />
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
