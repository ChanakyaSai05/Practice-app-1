import React from "react";

export const tableImport = (
  <table>
    <tr>
      <td>Name is</td>
    </tr>
    <tr>
      <td>Chanakya Sai</td>
    </tr>
    <tr>
      <td>Nickname is chakri</td>
    </tr>
  </table>
);

// //slice
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);
// console.log(part);
// //it will slice from 7th index to 12 th index

// let str1 = "Apple, Banana, Kiwi";
// let part1 = str1.slice(-12, -6);
// console.log(part1);
// //note here
// //here in first example it will slice from 7th to 12th index.
// //here it will slice from -11 to -6 (reverse of 1st one);

// let str2 = "Apple, Banana, Kiwi";
// let part21 = str2.slice(7);
// let part22 = str2.slice(-12);
// console.log(part21);
// console.log(part22);
// //part1 here we get all values from 7 index.
// //part2 here we gwt all values from -11 index

// //substring() it is similar to slice()
// //The difference is that substring() cannot accept negative indexes.
// //If you omit the second parameter, substring() will slice out the rest of the string

// //substr()
// //it is similar to slice().
// //The difference is that the second parameter specifies the length of the extracted part.

// let str3 = "Apple, Banana, Kiwi";
// let part3 = str.substr(7, 6); //Banana
// let par31 = str.substr(-4); //Kiwi

// //replace(),toUpperCase(),toLowerCase(),trim() method dirextly practised in website.

// //concat method
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2); //if we put text1 here then we get hello hello
// console.log(text3);
// //Hello world
// //Note
// // All string methods return a new string. They don't modify the original string.
// // Formally said:
// // Strings are immutable: Strings cannot be changed, only replaced.


// const el=React.createElement("h1",{id=1},"Hello World");

// const el1=React.createElement("h1",{id:"1"},"Hello world")

// const el2=React.createElement("div",{},React.createElement("h1"),id="2","Budget");


function test(){
  console.log("Hello");
  alert("This will alert after 5 seconds");
}
let id=setTimeout(test,5000);

function clearTimeout(){
  clearTimeout(id);
}
         



