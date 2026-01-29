import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxheading = (
  <h1 className="head" tabIndex="5">
    Hello World from JSX!
  </h1>
);
//React Component
const HeadingComponent = () => {
  return (
    <h1 className="head" tabIndex="5">
      Hello World from Component!
    </h1>
  );
};

// both are same
const HeadingComponent2 = () => (
  <h1 className="head" tabIndex="5">
    Hello World from Component!
  </h1>
);

// react component is nothing but a function which returns a react element
const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(<HeadingComponent />); //render method takes react element as an argument and coverts it to DOM element
