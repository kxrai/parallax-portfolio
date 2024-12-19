import React from "react";
import "../styles/slider.css"; // Path to your slider CSS

const Hobbies = () => {
  return (
    <div className="banner">
      {/* 3D Slider */}
      <div className="slider" style={{ "--quantity": 10 }}>
        {[...Array(10)].map((_, i) => (
          <div className="item" key={i} style={{ "--position": i + 1 }}>
            <img
              src={`${process.env.PUBLIC_URL}/hobby_images/dragon_${i + 1}.jpg`}
              alt={`Dragon ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="content">
        <h1 data-content="MY HOBBIES">MY HOBBIES</h1>
        <div className="author">
          <h2>Alicia Loi</h2>
          <p><b>3D Slider Showcase</b></p>
          <p>Some of my favorite visuals brought to life in 3D!</p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
