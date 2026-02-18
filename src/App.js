import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Header></Header>
      {Header()} */}
      <Body />
      {/* <Footer />  */}
    </div>
  );
};

// react component is nothing but a function which returns a react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //render method takes react element as an argument and coverts it to DOM element
