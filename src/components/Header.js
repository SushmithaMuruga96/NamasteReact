import { LOGO_URL, CART_URL } from "./utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" className="logo" />
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src={CART_URL} alt="cart" className="cart-icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
