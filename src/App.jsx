import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Plx from "react-plx";
import Navbar from "./components/Navbar/Navbar";
import Navbar_2 from "./components/Navbar/Navbar_2";
import About from "./pages/About"; 
import Hobbies from "./pages/Hobbies";
import Projects from './pages/Projects';

export default function App() {
  const [showNavbars, setShowNavbars] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerWidth >= 768 ? 680 : 800;
      setShowNavbars(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              {/* Foreground Image */}
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    end: 1100,
                    easing: "ease-in",
                    properties: [{ startValue: 1, endValue: 1.6, property: "scale" }],
                  },
                ]}
                style={{
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100vh",
                  zIndex: 100,
                  objectFit: "cover",
                }}
              >
                <img
                  className="shift-bg-mobile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  src="bg.png"
                  alt="Foreground"
                />
              </Plx>

              {/* Background Image */}
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    end: 800,
                    properties: [{ startValue: 1, endValue: 1.1, property: "scale" }],
                  },
                ]}
                style={{
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                }}
              >
                <img style={{ width: "100%" }} src="arcane_1.png" alt="background" />
              </Plx>

              {/* Centered Video */}
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    end: 400,
                    properties: [{ startValue: 1, endValue: 0, property: "opacity" }],
                  },
                ]}
                style={{
                  position: "fixed",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "auto",
                  zIndex: 150,
                }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                  style={{
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "35vw",
                    maxWidth: "500px",
                    minWidth: "300px",
                    objectFit: "contain",
                    zIndex: 150,
                    background: "none",
                  }}
                >
                  <source src="/CYBERPUNK_LOGO_1.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </Plx>

              {/* Conditionally Render Navbars */}
              {showNavbars && (
                <>
                  <Navbar />
                  {/* Uncomment below line if you want both navbars */}
                  {/* <Navbar_2 /> */}
                </>
              )}
            </div>
          }
        />
        {/* Home Page Route */}
        <Route path="/" element={<div>Home Page</div>} />
        {/* About Route */}
        <Route path="/about" element={<About />} />
        {/* Hobbies Route */}
        <Route path="/hobbies" element={<Hobbies />} />
        {/* Projects Route */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
