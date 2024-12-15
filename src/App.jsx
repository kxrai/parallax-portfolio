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
    <div className="relative">
      {/* Background Layer */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.2,
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
          zIndex: 1, // Lowest layer
        }}
      >
        <img src="background.jpg" alt="Background" className="w-full" />
      </Plx>

      {/* Middle Layer (Foreground Image) */}
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
          height: "100vh",
          objectFit: "cover", // Ensures the image covers the viewport
          zIndex: 1,
        }}
      >
        <img
          src="bg.png"
          alt="Foreground"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Stretch image while maintaining aspect ratio
          }}
        />
      </Plx>

      {/* Text Layer */}
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
          left: "35%",
          top: "26vw",
          width: "30vw",
          zIndex: 3, // Topmost layer
        }}
      >
        <img src="text-img.webp" alt="Cyberpunk Text" />
      </Plx>

      {/* Black Overlay Background */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: "400vh", zIndex: 0 }}
      >
        <div className="bg-black h-full"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-cyan-400 mt-[80vh]">
        <h1 className="text-6xl font-bold">Welcome to My Cyberpunk Portfolio</h1>
        <p className="text-2xl mt-10">Scroll to explore my projects.</p>
      </div>
    </div>
  );
}
