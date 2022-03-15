// import React, { useState } from "react";

// //Normal way
// // const BackgroundSetter = () => {
// //   const [display, handleColorChange] = useState("green");
// //   const style = {
// //     width: "100vw",
// //     height: "100vh",
// //     backgroundColor: display,
// //   };
// //   return (
// //     <>
// //       <div style={style}>
// //         <button onClick={() => handleColorChange("red")}>Red</button>
// //         <button onClick={() => handleColorChange("yellow")}>Yellow</button>
// //         <button onClick={() => handleColorChange("orange")}>Orange</button>
// //         <button onClick={() => handleColorChange("green")}>Green</button>
// //         <button onClick={() => handleColorChange("blue")}>Blue</button>
// //       </div>
// //     </>
// //   );
// // };
// // export default BackgroundSetter;

// // //local server
// const BackgroundSetter = () => {
//   const [display, setDisplay] = useState(
//     localStorage.getItem("color") || "green"
//   );
//   const style = {
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: display,
//   };
//   const handleColorChange = (color) => {
//     setDisplay(color);
//     localStorage.setItem("color", color);
//   };
//   return (
//     <>
//       <div style={style}>
//         <button onClick={() => handleColorChange("red")}>Red</button>
//         <button onClick={() => handleColorChange("yellow")}>Yellow</button>
//         <button onClick={() => handleColorChange("orange")}>Orange</button>
//         <button onClick={() => handleColorChange("green")}>Green</button>
//         <button onClick={() => handleColorChange("blue")}>Blue</button>
//       </div>
//     </>
//   );
// };
// export default BackgroundSetter;

// export default function BackgroundSetter1() {
//   const [display, setDisplay] = useState(
//     localStorage.getItem("colorItem") || "green"
//   );
//   const style = {
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: display,
//   };
//   const handleDisplay = (color) => {
//     setDisplay(color);
//     localStorage.setItem("colorItem", color);
//   };
//   return (
//     <div style={style}>
//       {/* <button onClick={() => setDisplay("yellow")}>yellow</button>
//       <button onClick={() => setDisplay("red")}>red</button>
//       <button onClick={() => setDisplay("orange")}>orange</button>
//       <button onClick={() => setDisplay("blue")}>blue</button>
//       <button onClick={() => setDisplay("grey")}>grey</button> */}
//       <button onClick={() => handleDisplay("yellow")}>yellow</button>
//       <button onClick={() => handleDisplay("red")}>red</button>
//       <button onClick={() => handleDisplay("orange")}>orange</button>
//       <button onClick={() => handleDisplay("blue")}>blue</button>
//       <button onClick={() => handleDisplay("grey")}>grey</button>
//     </div>
//   );
// }

// // export default function BackgroundSetter() {
// //   const [display, setDisplay] = useState("green");
// //   const style = {
// //     width: "100vw",
// //     height: "100vh",
// //     backgroundColor: display,
// //   };
// //   return (
// //     <div style={style}>
// //       <button onClick={() => setDisplay("yellow")}>yellow</button>
// //       <button onClick={() => setDisplay("orange")}>orange</button>
// //       <button onClick={() => setDisplay("red")}>red</button>
// //       <button onClick={() => setDisplay("blue")}>blue</button>
// //       <button onClick={() => setDisplay("grey")}>grey</button>
// //     </div>
// //   );
// // }
