// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import Plx from "react-plx";
// import Navbar from "./components/Navbar/Navbar";
// import Navbar_2 from "./components/Navbar/Navbar_2";

// export default function App() {
//   const [showNavbars, setShowNavbars] = useState(false); // Track scroll position for both navbars

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
  
//       // Set scroll thresholds based on screen width
//       const scrollThreshold = window.innerWidth >= 768 ? 680 : 800; // 700 for desktop, 800 for mobile
  
//       console.log("Scroll Position:", scrollPosition, "Threshold:", scrollThreshold);
  
//       if (scrollPosition >= scrollThreshold) {
//         setShowNavbars(true);
//       } else {
//         setShowNavbars(false);
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);  

//   return (
//     <div>
//       {/* Foreground Image */}
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 1100,
//             easing: "ease-in",
//             properties: [{ startValue: 1, endValue: 1.6, property: "scale" }],
//           },
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%",
//           height: "100vh",
//           transform: "translateY(10%) scale(0.9)",
//           zIndex: 100,
//         }}
//       >
//         <img
//           style={{
//             width: "100%",
//             height: "auto",
//             objectFit: "cover",
//           }}
//           src="bg.png"
//           alt="Foreground"
//         />
//       </Plx>

//       {/* Background Image */}
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 800,
//             properties: [{ startValue: 1, endValue: 1.18, property: "scale" }],
//           },
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%",
//         }}
//       >
//         {/* <img style={{ width: "100%" }} src="background.jpg" alt="background" /> */}
//         <img style={{ width: "100%" }} src="zaun.jpg" alt="background" />
//       </Plx>

//       {/* Centered Text */}
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [{ startValue: 1, endValue: 0, property: "opacity" }],
//           },
//         ]}
//         style={{
//           position: "fixed",
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "auto",
//           zIndex: 150,
//         }}
//       >
//         <img
//           style={{
//             width: "35vw",
//             maxWidth: "500px",
//             minWidth: "300px",
//           }}
//           src="/text-img.webp"
//           alt="Cyberpunk Text"
//         />
//       </Plx>

//       {/* Conditionally Render Navbars */}
//       {showNavbars && (
//         <>
//           <Navbar />
//           {/* Uncomment below line if you want both navbars */}
//           {/* <Navbar_2 /> */}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Plx from "react-plx";
import Navbar from "./components/Navbar/Navbar";
import Navbar_2 from "./components/Navbar/Navbar_2";

export default function App() {
  const [showNavbars, setShowNavbars] = useState(false); // Track scroll position for both navbars
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Set scroll thresholds based on screen width
      const scrollThreshold = window.innerWidth >= 768 ? 680 : 800;

      if (scrollPosition >= scrollThreshold) {
        setShowNavbars(true);
      } else {
        setShowNavbars(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoEnd = () => {
    // Pause the video on its last frame
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = videoRef.current.duration; // Freeze on last frame
    }
  };

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
        {/* <img style={{ width: "100%" }} src="zaun.jpg" alt="background" /> */}
        <img style={{ width: "100%" }} src="arcane_1.png" alt="background" />
        {/* <img style={{ width: "100%" }} src="background.jpg" alt="background" /> */}
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
        {/* Video Component */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd} // Freeze video on last frame when it ends
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
  );
}
