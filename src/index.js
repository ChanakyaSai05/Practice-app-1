import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import BackgroundSetter from "./BackgroundSetter";
import Counter from "./Counter";
// import { tableImport } from "./Practise";
// import Screen from "./Screen";

//07 jan
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<BackgroundSetter />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
//practice
//Conditions - if statements
//React supports if statements, but not inside JSX.
//To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:
// const x = 5;
// let text = "Good bye";
// if (x < 10) {
//   text = "Hello";
// }
// const myelement = <h1>{text}</h1>;
// ReactDOM.render(myelement, document.getElementById("root"));
//or
//ReactDOM.render(<h1>{text}</h1>, document.getElementById("root"));

// const x = 5;
// const myelement = <h1>{x < 10 ? "Hello" : "GoodBye"}</h1>;
// ReactDOM.render(myelement, document.getElementById("root"));

// const myelement = (
//   <ul>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>orange</li>
//   </ul>
// );
// ReactDOM.render(myelement, document.getElementById("root"));

//ReactDOM.render(<p>Hello Chanakya</p>, document.getElementById("root"));

//Expressions in JSX
//with JSX you can write expressions inside curly braces{}
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
// ReactDOM.render(myelement, document.getElementById("root"));
// const table = (
//   <table>
//     <tr>
//       <td>Name</td>
//     </tr>
//     <tr>
//       <td>Chanakya Sai</td>
//     </tr>
//     <tr>
//       <td>Nickname is chakri</td>
//     </tr>
//   </table>
// );
// ReactDOM.render(table, document.getElementById("root"));

//if you want to this variable from another file.

//ReactDOM.render(tableImport, document.getElementById("root"));
//import PracticeApp from "./PracticeApp";
//import index from "./index";

//const myArray = ["Apple", "Banana", "orange"];
// const myArray2 = [1, 2, 3];
// const mylist = myArray2.map((item) => <p>{item * 3}</p>);

//ReactDOM.render(mylist, document.getElementById("root"));

//we can also do all imports in App.js and that is linked here so previous one is stored below

// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppSection from './AppSection';
// import CardSection from './CardSection';
// import Footer from './Footer';
// import Jumbotron from './Jumbotron';
// import Navbar from './Navbar';

// ReactDOM.render(<div><Navbar/><Jumbotron/><AppSection/><CardSection/><Footer/></div>,document.getElementById('root'));

//component
//It is a isolated piece of code which can be reused in other module
//React application has a root component in which other sub components are included.
//there is an app component all are in that
//component represents a part of user interface and components are the bulding block of any react application
//component represents a part of userInterface and components are reusable and components are the building blocks of react application
//
//example
//tic tac toe is made of a board and board will have 9 sub components
//calculator will have a screen and keypad components and a keypad has abutton components.
//It totally depends on you how do you want to structure these components.

//this entire code can be writtenas
//const el=<h1 id="1">Hello world</h1>
//ReactDOM.render(el,document.getElementById('root'));

//ANOTHER WAY of writing if you are not using jsx
//const el=React.createElement("h1",{id:"1"},"hello world");
//this is javascript statement not html

// //another example
// const el2=<div><h1 id="2">Budget</h1></div>
//const el2=React.createElement("div",{},React.createElement("h1",{id:"2"},"Budget"));
// //second paramter is for attributes
//ReactDOM.render(el2,document.getElementById("root"));
//so by  this 1st line is easy to write
//who is converting JAX to  that particuar equivalent statement is basically a tool called babel does this
//when we use create react app at that actually gets installed with crate react app application that babel is responsible for converting this code
//babel is basically atrans filer that it takes later version of the language and converts it to the eralier version of the language
//see screnshots for babel conversion
//the advantage of babel we can understand when there is many nested elements when there is lot of nested divs then writing 2nd code is difficult
//JSX is a syntax extension is we write 1st one that is jsx line in simple javascript it dosenot work because it work with react only
//it works with react environment beacause babel and everything is installed by default and it is responsible for converting 1st one to 2nd one

//ReactDOM.render(<div>Hello World</div>,document.getElementById('root'));

//JSX
//JSX is not an official JS syntax

//practice
// import React from 'react';
// import ReactDOM from 'react-dom';

// //const el=<div id="1"><h1>chanakya</h1></div>

// const el=React.createElement("div",{id:"1"},React.createElement("h1",{},"chanakya"));
// ReactDOM.render(el,document.getElementById("root"));
