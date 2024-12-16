// import "./styles.css";
// import Plx from "react-plx";

// export default function App() {
//   return (
//     <div>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 700,
//             easing: "ease-in",
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.6,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%",
//           zIndex: 100
//         }}
//       >
//         <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 800,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.18,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{  
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%"
//         }}
//       >
//         <img style={{ width: "100%" }} src="background.jpg" alt="background" />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 0,
//                 property: "opacity"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: "26vw",
//           width: "100%"
//         }}
//       >
//         <img
//           style={{
//             width: "30vw"
//           }}
//           src="/text-img.webp"
//           alt="Goonies"
//         />
//       </Plx>
//       <div
//         style={{
//           position: "fixed",
//           lefft: 0,
//           top: 0,
//           zIndex: 200,
//           paddingTop: "56%",
//           height: "400vh",
//           width: "100%"
//         }}
//       >
//         <div
//           style={{
//             background: "#000",
//             height: "100%"
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

import "./styles.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div>
      {/* Foreground Image (bg.png) */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img
          style={{ width: "100%" }}
          src="bg.png"
          alt="Foreground"
        />
      </Plx>

      {/* Background Image (background.jpg) */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="background.jpg"
          alt="Background"
        />
      </Plx>

      {/* Text Image (text-img.webp) */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          top: "26vw", // Maintain vertical alignment
          left: 0,
          width: "100%", // Ensure it spans full width for flex centering
          display: "flex", // Use flexbox to center content
          justifyContent: "center", // Horizontal centering
          alignItems: "center", // Vertical centering (optional if needed)
          zIndex: 150, // Keep it above background layers
          pointerEvents: "none", // Prevent interference with clicks
        }}
      >
        <img
          style={{
            width: "30vw", // Keep the desired width
            pointerEvents: "none", // Prevent interference
          }}
          src="/text-img.webp"
          alt="Cyberpunk Text"
        />
      </Plx>



      {/* Black Background Overlay */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
