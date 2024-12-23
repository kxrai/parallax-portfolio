import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles/styles.css";
import Plx from "react-plx";
import Navbar from "./components/Navbar/Navbar";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const [showNavbars, setShowNavbars] = useState(false);
  const videoRef = useRef(null);

  // Ensure all assets are loaded
  const ensureAllLoaded = () => {
    const assets = [
      "bg.png",
      "arcane_1.png",
      "/CYBERPUNK_LOGO_1.webm",
    ];

    return Promise.all(
      assets.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );
  };

  // Simulate slow progress bar
  const simulateProgress = (target) => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= target) {
            clearInterval(interval);
            resolve();
            return prev; // Stop updating
          }
          return prev + 1; // Increment slowly
        });
      }, 30); // Adjust for visual speed
    });
  };

  // Manage loading state on route changes
  useEffect(() => {
    const loadContent = async () => {
      setProgress(0);
      setLoading(true);

      // Simulate progress up to 90%
      await simulateProgress(90);

      // Wait for actual assets to load
      await ensureAllLoaded();

      // Complete the progress bar to 100%
      await simulateProgress(100);

      // Delay to allow full visual transition
      setTimeout(() => setLoading(false), 300);
    };

    loadContent();
  }, [location.pathname]);

  // Scroll Threshold Logic
  useEffect(() => {
    document.body.classList.add("old-page-style");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerWidth >= 768 ? 680 : 300;
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

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
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
            {showNavbars && <Navbar />}
          </div>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
