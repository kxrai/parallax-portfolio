import React, { useState, useEffect } from "react";
import "./styles.css";
import Plx from "react-plx";
import Navbar from "./components/Navbar/Navbar";
import Navbar_2 from "./components/Navbar/Navbar_2";

export default function App() {
  const [showNavbars, setShowNavbars] = useState(false); // Track scroll position for both navbars

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      console.log("Scroll Position:", scrollPosition); // Log scroll position to debug

      // Show Navbars when scroll position >= 600
      if (scrollPosition >= 800) {
        setShowNavbars(true);
      } else {
        setShowNavbars(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          transform: "translateY(10%) scale(0.9)",
          zIndex: 100,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
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
            properties: [{ startValue: 1, endValue: 1.18, property: "scale" }],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>

      {/* Centered Text */}
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
        <img
          style={{
            width: "35vw",
            maxWidth: "500px",
            minWidth: "300px",
          }}
          src="/text-img.webp"
          alt="Cyberpunk Text"
        />
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
  );
}
