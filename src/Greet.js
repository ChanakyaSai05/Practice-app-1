//Example file

import React from "react";

// export default class Greet extends React.Component {
//   render() {
//     // return (
//     //   <h1>
//     //     Hello {this.props.name}. and age is {this.props.age} is married

//     //   </h1>

//     // );

//     return this.props.name;
//   }
// }

// //this is all about how to use class component and props in class component
// export default class Greet extends React.Component {
//   render() {
//     return (
//       <h1>
//         Hello {this.props.name}. and age is {this.props.age} is married
//         {this.props.isMarried}
//       </h1>
//     );
//   }
// }
// //this.props.isMarried is not working check later

//difference between this.name and this.props.name
// export default class Greet extends React.Component {
//   name = "mrigank";
//   render() {
//     console.log(this.name); //mrigank
//     return (
//       <h1>
//         Hello {this.props.name}. your age is {this.props.age}
//         {/* chanakya and sandeep */}
//       </h1>
//     );
//   }
// }

// export default class Greet extends React.Component {
//   // state = { name: "Mrigank", isMarried: false };
//   isMarried = false;

//   render() {
//     // if (this.state.isMarried) {
//     //   return <h1>Married</h1>;
//     // } else {
//     //   return <h1>Not married</h1>;
//     // }
//
//     if (this.isMarried) {
//       return <h1>Married</h1>;
//     } else {
//       return <h1>Not married</h1>;
//     }
//   }
// }

//same thing but with variable declaration

export default class Greet extends React.Component {
  isMarried = false;
  render() {
    let message;
    if (this.isMarried) {
      message = <h2>Married</h2>;
    } else {
      message = <h2>Not married</h2>;
    }
    return message;
  }
}

//practice of above
// export default class Greet extends React.Component{
//   isMarried=false;
//   render(){
//     let message;
//     if(this.isMarried){
//       message=<h2>Married</h2>
//     }else{
//       message=<h2>Not Married</h2>
//     }
//     return message;
//   }
// }
// export default class Greet extends React.Component{
//   isMarried=false;
//   render(){
//     if(this.isMarried){
//       return <h2>Married</h2>
//     }else{
//       <h2>Not married</h2>
//     }
//   }
// }

// export default class Greet extends React.Component {
//   state = { name: "chanakya", isMarried: false };
//   render() {
//     if (this.state.isMarried) {
//       return <h2>Married</h2>;
//     } else {
//       return <h2>Not Married</h2>;
//     }
//   }
// }

// export default class Greet extends React.Component {
//   state = { name: "chanakya", isMarried: false };
//   render() {
//     let message;
//     if (this.state.isMarried) {
//       message = <h2>Married</h2>;
//     } else {
//       message = <h2>Not Married</h2>;
//     }
//     return message;
//   }
// }

//ternary practice
// export default class Greet extends React.Component {
//   state = { name: "chanakya", isMarried: false };
//   render() {
//     return this.state.isMarried ? <h2>Married</h2> : <h2>Not Married</h2>;
//   }
//}

// export default class Greet extends React.Component {
//   // state = { name: "Mrigank", isMarried: false };
//   isMarried = false;

//   render() {
//     // if (this.state.isMarried) {
//     //   return <h1>Married</h1>;
//     // } else {
//     //   return <h1>Not married</h1>;
//     // }
//

//lets try same thing with function
// export default Greet function()){
//   isMarried=false;
//   let message;
//   if (this.isMarried) {
//     message = <h2>Married</h2>;
//   } else {
//     message = <h2>Not married</h2>;
//   }
//   return message;
// }
//not working with function.

//ternary operator

// export default class Greet extends React.Component {
//   isMarried = false;
//   render() {
//     return this.isMarried ? <h1>Married</h1> : <h1>Not Married</h1>;
//   }
// }

//examples

// export default class Greet extends React.Component {
//   isMarried = false;
//   render() {
//     // return <div>{false}</div>;//empty screen
//     //return <div>{null}</div>//empty screen
//     return (
//       <>
//         {/* {this.isMarried && <h1>Married</h1>}
//         {!this.isMarried && <h1>not Married</h1>} */}

//         {/*{this.isMarried && <h1>Married</h1>}*/}
//         {!this.isMarried && <h1>Not Married</h1>}
//       </>
//     );
//   }
// }
