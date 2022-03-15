// //example file to explain function props
// //import React from "react";

// // export default function Namasthe(props) {
//   //   let message;
//   //   if (props.isMarried) {
//   //     message = <h2>nice</h2>;
//   //   } else {
//   //     message = <h2>niceeeeeeeeeee</h2>;
//   //   }

//   //or we can use ternary directly
//   //   let message = props.isMarried ? <h2>nice</h2> : <h2>niceeeeeeeeeee</h2>;
//   //   return (
//   //     <h2>
//   //       Namsthe {props.name} and his age is {props.age}
//   //       {message}
//   //       {/* here we have to write expression not if else condition that is something evaluates to a value */}
//   //     </h2>
//   //   );
//   // }
//   //or we can directly write like this
//   //if only onestatement to return
//   //   if (props.isMarried) {
//   //     return <h2>nice</h2>;
//   //   } else {
//   //     return <h2>niceeeeeeeeeee</h2>;
//   //   }
//   //   return (
//   //     <h2>
//   //       Namsthe {props.name} and his age is {props.age}
//   //       {props.isMarried ? <h2>nice</h2> : <h2>niceeeeeeeeeee</h2>}
//   //       {/* here we have to write expression not if else condition that is something evaluates to a value */}
//   //       {props.age < 30 ? <h3>young man</h3> : <h3>Middle aged man</h3>}
//   //     </h2>
//   // );
// }
// //always prefer ternary which is much easier to use.

// //recomended way of writing functions
// // const Namasthe = (props) => {
// //   // export default here sould not write in this way
// //   //props are immutable

// //   return (
// //     <h1>
// //       Namsthe {props.name} and age is {props.age}
// //     </h1>
// //   );
// // };
// // export default Namasthe;

// //if you have only one statement then we dont need to write return statement.
// // const Namasthe = (props) => (
// //   <h1>
// //     Namsthe {props.name} and age is {props.age}
// //   </h1>
// // );

// // export default Namasthe;

// // export default function Namasthe(props) {
// //   return (
// //     <h1>
// //       Namsthe {props.name} and age is {props.age}
// //     </h1>
// //   );
// // }
