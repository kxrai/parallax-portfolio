import "./styles.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              { startValue: 1, endValue: 1.6, property: "scale" }
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0, // Move it down by 10% of the viewport height
          width: "100%",
          height: "100vh", // Ensure it fills vertically
          transform: "translateY(10%) scale(0.9)", // Fine-tune vertical movement and size
          zIndex: 100, // Keep it above the background
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto", // Maintain proportions
            objectFit: "cover",
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
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          // top: "10%",
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          zIndex: 150
        }}
      >
        <img
          style={{
            width: "35vw",
            maxWidth: "500px",
            minWidth: "300px",
            "@media (max-width: 768px)": {
              width: "75vw",
              maxWidth: "350px"
            }
          }}
          src="/text-img.webp"
          alt="Cyberpunk Text"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}
