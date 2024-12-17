import "./styles.css";
import Plx from "react-plx";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      {/* Foreground Image */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1100, // Increase this value to control scroll zoom effect
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

      {/* Sun Portal Navbar */}
      <Navbar />
    </div>
  );
}
