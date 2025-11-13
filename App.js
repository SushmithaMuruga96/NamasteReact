import React from "react";
import ReactDOM from "react-dom/client";

/*
* <div id=="parent">
    <div id ="child">
      <h1> I am h1 tag</h1> 
      <h2> I am h2 tag</h2> ---> siblings
    </div>
    <div id ="child">
      <h1> I am h1 tag</h1> 
      <h2> I am h2 tag</h2> ---> siblings
    </div>
</div>
*
*
how to create the above structure in React

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am sushmitha"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//this is actuall react code, this would be structure of the react element
// React.createElement("tag", { attribute object }, "children");
// React.createElement("h1", { id: "heading" }, "Hello from React!!");

//now to overcome the problem of writing such large code we have JSX

// const heading = React.createElement(
//   "h1",
//   {
//     // attribute object
//     id: "heading", // attribute
//     xyz: "abc", // custom attribute
//   },
//   "Hello from React!!"
// );
const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(parent); //render method takes react element as an argument and coverts it to DOM element
