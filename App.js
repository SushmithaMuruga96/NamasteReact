const heading = React.createElement(
  "h1",
  {
    // attribute object
    id: "heading", // attribute
    xyz: "abc", // custom attribute
  },
  "Hello from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method takes react element as an argument and coverts it to DOM element
