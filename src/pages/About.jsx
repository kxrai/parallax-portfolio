import React, { useRef, useEffect } from "react";
import "../styles/about.css";
import Navbar_2 from '../components/Navbar/Navbar_2';

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    document.body.classList.remove('old-page-style');
    document.body.classList.add('about-page-style');
    
    return () => {
      // Clean up scroll prevention
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="about-container">
      <Navbar_2 />
      <div className="about-content-wrapper">
        <header className="about-header">
          <h1>About Me</h1>
        </header>

        <section className="about-content">
          <p>
            Hello! I'm <strong>Alicia Loi</strong>, a web developer and designer
            with a passion for creating engaging and dynamic user experiences.
            This is my About page where I can share a bit more about myself, my
            skills, and interests.
          </p>
          <p>
            I specialize in <em>front-end development</em>, with experience in
            React, CSS, and JavaScript. I enjoy building projects that are both
            functional and aesthetically pleasing.
          </p>
        </section>

        <section className="about-video">
          <video
            ref={videoRef}
            src="/about_images/alicia.webm"
            className="about-video-content"
            playsInline
            muted
            autoPlay
            loop
          ></video>
        </section>

        <footer className="about-footer">
          <p>
            Let's connect! Follow me on my social platforms or contact me
            anytime.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;