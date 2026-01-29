import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React!",
);

const heading2 = <h1>Hello World from JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(heading2); //render method takes react element as an argument and coverts it to DOM element
