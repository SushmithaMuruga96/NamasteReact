import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
/*
-header
  -logo
  -nav
-body
  -search
  -restoContainer
    -restoCard
      -image
      -restoName
      -cuisine
      -rating
      -deliveryTime
      -costForTwo
-footer
  -links
  -copyright
*/

// object

const restaurantObj = [];
const RestoCard = (props) => {
  const { name, cuisines, rating, delivery, logoImageKey } = props.resData;
  console.log(props.resData);
  return (
    <div className="resto-card">
      <img src={""} alt="resto-image" className="resto-image" />

      <h3 className="resto-name">{name}</h3>
      <p className="cuisine">{cuisines.join(", ")}</p>
      <p className="rating">
        Rating: {rating.score} ({rating.displayCount})
      </p>
      <p className="delivery-time">Delivery Time: {delivery.time} mins</p>
    </div>
  );
};
const Restaurants = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <h2>Restaurants</h2>
      <div className="resto-container">
        {restaurantObj.map((restaraunt) => (
          <RestoCard resData={restaraunt} key={restaraunt.outletCode} />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        alt="logo"
        className="logo"
      />
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img
              src="https://p7.hiclipart.com/preview/1022/32/945/shopping-cart-logo-icon-shopping-cart.jpg"
              alt="cart"
              className="cart-icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Restaurants />
      {/* <Footer />  */}
    </div>
  );
};

// react component is nothing but a function which returns a react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //render method takes react element as an argument and coverts it to DOM element
