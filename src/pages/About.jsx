import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      {/* Content Section */}
      <section className="about-content">
        <p>
          Hello! I’m <strong>Alicia Loi</strong>, a web developer and designer with a passion
          for creating engaging and dynamic user experiences. This is my About
          page where I can share a bit more about myself, my skills, and
          interests.
        </p>
        <p>
          I specialize in <em>front-end development</em>, with experience in React, CSS,
          and JavaScript. I enjoy building projects that are both functional and
          aesthetically pleasing.
        </p>
      </section>

      {/* Optional: Add an image */}
      <section className="about-image">
        <img src="/profile-placeholder.png" alt="Profile" />
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>Let’s connect! Follow me on my social platforms or contact me anytime.</p>
      </footer>
    </div>
  );
};

export default About;
