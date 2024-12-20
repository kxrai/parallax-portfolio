import React from 'react';
// import '../styles/slider.css'; // Import slider-specific CSS
import '../styles/hobbies.css';

const Hobbies = () => {
  return (
    <div className="hobbies-page">
      {/* Background */}
      <div className="background-container"></div>

      {/* Model Overlay */}
      <div className="model"></div>

      {/* Slider */}
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
      </div>
      {/* Content Section */}
      <div className="content">
        <h1 data-content="MY HOBBIES">MY HOBBIES</h1>
        <div className="author">
          <h2>Alicia Loi</h2>
          <p>
            <b>About My Interests:</b>
          </p>
          <p>
            I enjoy music, playing guitar and piano, video games, and art. I love listening to music,
            exploring UI design, and web development. Sports such as basketball, hockey, volleyball,
            swimming, and snowboarding are also part of my hobbies. I am passionate about traveling
            and 3D visualization, bringing creativity to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
