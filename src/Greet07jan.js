// import React from "react";
// //last example to exlain phases
// export default class Greet extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Greet constructor");
//   }
//   componentDidMount() {
//     console.log("Greet mounted");
//   }
//   componentDidUpdate() {
//     console.log("Greet updated");
//   }
//   render() {
//     console.log("Greet Rendered");
//     return (
//       <>
//         {this.props.count}
//         <h1>Hello world</h1>
//         <h4>Rise and shine!</h4>
//       </>
//     );
//   }
// }
// samething practice

// display with props
// In this example component will unmount not working
// import React from "react";
// export default class Greet07jan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true,
//     };
//     console.log("constructor called");
//   }
//   display = () => {
//     let current = this.state.display;
//     this.setState({ display: !current });
//   };
//   componentDidMount() {
//     console.log("comonent did mount called");
//   }
//   componentDidUpdate() {
//     console.log("component did update called");
//   }
//   componentWillUnmount() {
//     console.log("component will Unmount called");
//   }
//   render() {
//     console.log("render called");
//     return (
//       <div>
//         {this.state.display && (
//           <>
//             <h1>{this.props.name}</h1>
//             <h2>{this.props.age}</h2>
//           </>
//         )}

//         <button onClick={this.display}>
//           {this.state.display ? <div>Hide</div> : <div>Display</div>}
//         </button>
//       </div>
//     );
//   }
// }
//Increment and decrement
// import React from "react";
// export default class Greet07jan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num: 0,
//     };
//     console.log("constructor called");
//   }

//   inc = () => {
//     // let current = this.state.num;
//     // this.setState({ num: current + 1 });
//     // this.setState({ num: this.state.num + 1 });
//     let current = this.state.num;
//     this.setState({ num: current + 1 });
//   };

//   componentDidMount() {
//     console.log("Component did mount called");

//     this.id = setInterval(() => console.log("Hello"), 1000);
//   }
//   componentDidUpdate() {
//     console.log("component did update called");
//   }
//   componentWillUnmount() {
//     console.log("component will unmount called");
//     clearInterval(this.id);
//   }
//   dec = () => {
//     let current = this.state.num;
//     this.setState({ num: current - 1 });
//   };

//   render() {
//     console.log("render called");
//     return (
//       <div>
//         {this.state.num}
//         <button onClick={this.inc}>Increment</button>
//         <button onClick={this.dec}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default class Greet07jan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       on: false,
//     };
//   }

//   on = () => {
//     const current = this.state.on;
//     this.setState({ on: !current });
//   };
//   render() {
//     // let message = this.state.on ? <h1>Turned on</h1> : <h1>Turned off</h1>;
//     // return (
//     //     // let message = this.state.on ? <h1>Turned on</h1> : <h1>Turned off</h1>;//we cannot use here
//     //   <div>
//     //     <button onClick={this.on}>Turn on/off</button>
//     //     {message}
//     //     {/* //or put directly the essage part here */}
//     //   </div>
//     // );

//     // by shortcircuit operator
//     return (
//       <>
//         {this.state.on && <div>Turned on</div>}
//         {!this.state.on && <div>Turned off</div>}
//         <button onClick={this.on}>
//           {this.state.on ? <div>off</div> : <div>on</div>}
//         </button>
//       </>
//     );
//   }
// }

// export default class Greet07jan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false,
//     };
//     console.log("constructor called");
//   }

//   componentDidMount() {
//     console.log("component did mount called");
//   }
//   handleClick = () => {
//     // this.setState({ clicked: true });//if write like this only one time this work since next time button clicked agian the clicked is true so false will not come.
//     const current = this.state.clicked;
//     this.setState({ clicked: !current });
//   };
//   render() {
//     console.log("render called");
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h1>Rise and shine</h1>
//         <button onClick={this.handleClick}>Click here </button>
//         {this.state.clicked ? (
//           <div>Clicked is true</div>
//         ) : (
//           <div>Clicked is false</div>
//         )}
//       </div>
//     );
//   }
//}
