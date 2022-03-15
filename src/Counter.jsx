import React, { useState } from "react";

// const Counter = (props) => {
//   //   const [count, setState] = useState(0);
//   //   //const [display, setDisplay] = useState(false);
//   //   function handleClick() {
//   //     setState(count + 1);
//   //   }

//   const [count, setCount] = useState(0);
//   const handleClick = () => setCount(count + 1);
//   return (
//     <div>
//       {count}
//       <div>
//         <button onClick={handleClick}>Increment</button>
//       </div>
//     </div>
//   );
// };
// export default Counter;

// const Counter = (props) => {
//   const [display, setDisplay] = useState(false);
//   //   function displayFn() {
//   //     setDisplay(true); //work for one time
//   //   }
//   const displayFn = () => setDisplay(!display);
//   return (
//     <>
//       <div>
//         {display && <div>I am displaying</div>}
//         <button onClick={displayFn}>Toggle</button>
//       </div>
//     </>
//   );
// };
// export default Counter;

//Increment/decrement and Reset counter

// const Counter = (props) => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {count}
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// };
// export default Counter;

//useEffect will always execute once irrespective of the dependency array
//Mounting
//If I pass an empty array,the function inside useEffect will run only once.

//This example demonstrates the above all methods.
// const Counter = (props) => {
//   const [count, setCount] = useState(0);
//   const [display, setDisplay] = useState(false);
//   useEffect(function () {
//     console.log("Mount");
//   }, []); //only once

//   useEffect(
//     function () {
//       console.log("count or display changed");
//     },
//     [count, display]
//   );

//   useEffect(
//     function () {
//       console.log("count changed");
//     },
//     [count]
//   );
//   useEffect(
//     function () {
//       console.log("display changed");
//     },
//     [display]
//   );

//   useEffect(function () {
//     console.log("Something changed");
//   });

//   return (
//     <>
//       <div>
//         {display && (
//           <>
//             {count}
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//           </>
//         )}
//       </div>
//       <button onClick={() => setDisplay(!display)}>
//         {display ? "Hide counter" : "Display counter"}
//       </button>
//     </>
//   );
// };
// export default Counter;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <>
      {display && (
        <div>
          {counter}
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      )}
      <button onClick={() => setDisplay(!display)}>
        {display ? "Hide" : "show"}
      </button>
    </>
  );
};
export default Counter;
