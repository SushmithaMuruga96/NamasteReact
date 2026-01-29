import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">This is an Title Component</h1>;

const elem = <span>This is JSX Element</span>;

const titleElement = (
  <h1 className="title" tabIndex="0">
    {elem} &nbsp; This is an Title Element
  </h1>
);

//component composition - combining multiple components into component
// javascrtip expression - any valid set of literals,
// variables, operators,
//js code statements
// and expressions can be written inside curly braces {}

const name = "John Doe";
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="head" tabIndex="5">
        Hello from Functional Component!
      </h1>
    </div>
  );
};

// react component is nothing but a function which returns a react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //render method takes react element as an argument and coverts it to DOM element
