// import Screen from "./Screen";
// import Button from "./Button";
// import "./Style.css";
import Greet07jan from "./Greet07jan";
// import Namasthe07jan from "./Namasthe07jan";
// import Display07jan from "./Display07jan";
// import BurgerTop from "./BurgerTop";
// import BurgerMGreen from "./BurgerMGreen";
// import BurgerMred from "./BurgerMRed";
// import BurgerMyellow from "./BurgerMYellow";
// import BurgerBottom from "./BurgerBottom";
// import "./Style.css";
// import Navbar from "./Navbar";
// import Jumbotron from "./Jumbotron";
// import CardSection from "./CardSection";
// import Footer from "./Footer";
// import React from "react";
// import GateHeader from "./GateHeader";
// import GateNavbar from "./GateNavbar";
// import GateANav1 from "./GateANav1";
// import GateANav2 from "./GateANav2";
// import Counter from "./Counter";
import BackgroundSetter from "./BackgroundSetter";

//fun code
// function App() {
//   const arr = ["Usman", "Prateek", "Avishek", "Mrigank", "Sumit"];
//   return (
//     <>
//       <div>
//         <h1>The person will max number of kids will be</h1>
//         {console.log(arr[Math.floor(arr.length * Math.random())])}
//         {/* If you use Math.ceil then there is a chance to get 5 so use Math.floor */}
//         {/* {document.write(arr[Math.floor(arr.length * Math.random())])} */}
//         {/* Above one is not working check after */}
//       </div>
//     </>
//   );
// }
//export default App;
export default function App() {
  return (
    <>
      <BackgroundSetter />
    </>
  );
}
// export default function App() {
//   return (
//     <>
//       <GateHeader />
//       <GateNavbar />
//       <div className="GateANav">
//         <GateANav1 />
//         <GateANav2 />
//       </div>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Jumbotron />
//       <CardSection />
//       <Footer />
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <div className="container">
//       <div className="burger">
//         <BurgerTop />
//         <BurgerMGreen />
//         <BurgerMred />
//         <BurgerMyellow />
//         <BurgerMGreen />
//         <BurgerMred />
//         <BurgerMred />
//         <BurgerBottom />
//       </div>
//     </div>
//   );
// }

//7th jan greet last example to explain mount

// export default function App() {
//   return (
//     <>
//       <Display07jan />
//     </>
//   );
// }
// function export namasthe on 07/jan
// export default function App() {
//   return (
//     <>
//       <Namasthe07jan />
//     </>
//   );
// }

// import React from "react";
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true,
//     };
//   }

//   display = () => {
//     this.setState({ display: false });
//   };
//   render() {
//     return (
//       <>
//         {this.state.display && <Greet07jan />}
//         <button onClick={this.display}>
//           {/* {this.state.display ? <div>Hide</div> : <div>Show</div>} */}
//           Hide
//         </button>
//       </>
//     );
//   }
// }

// export default function App() {
//   return (
//     <>
//       {/* for display */}
//       {/* <Greet07jan name="chanakya" age={25} /> */}
//       {/* <Greet07jan name="sandeep" age={26} /> */}
//       {/* <Greet07jan name="datta" age={19} />  */}
//     </>

//     //     <div id="container">
//     //       <div id="borderContainer">
//     //         <Screen />
//     //         <Button />
//     //       </div>
//     //     </div>
//   );
// }
