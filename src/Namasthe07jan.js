// import React from "react"; not required
import React, { useEffect } from "react";

const Namasthe = (props) => {
  useEffect(function () {
    console.log("component mounted");
  }, []);
  //   useEffect(
  //     function () {
  //       console.log("something changed");
  //     },
  //     [count, display]
  //   );
  //   useEffect(function () {
  //     console.log("count changed", [count]);
  //   });
  //   useEffect(function () {
  //     console.log("Display changed", [display]);
  //   });
  return <div>Hello</div>;
};
export default Namasthe;
