import React, { useRef, useEffect } from "react";
import "../styles/about.css";
import Navbar_2 from '../components/Navbar/Navbar_2';

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove('old-page-style');
    document.body.classList.add('about-page-style');
    
    const video = videoRef.current;

    if (video) {
      // Event listener for when the video ends
      video.addEventListener("ended", () => {
        setTimeout(() => {
          video.currentTime = 0;
          video.play();
        }, 5000); // Pause for 5 seconds before restarting
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", null);
      }
    };
  }, []);

  return (
    <div className="about-container">
      <Navbar_2 />
      {/* Header */}
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      {/* Content Section */}
      <section className="about-content">
        <p>
          Hello! I’m <strong>Alicia Loi</strong>, a web developer and designer
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

      {/* Video Section */}
      <section className="about-video">
        <video
          ref={videoRef}
          src="/about_images/alicia.webm"
          className="about-video-content"
          playsInline
          muted
          autoPlay
        ></video>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>
          Let’s connect! Follow me on my social platforms or contact me
          anytime.
        </p>
      </footer>
    </div>
  );
};

export default About;
