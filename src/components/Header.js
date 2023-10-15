import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
// import Cart from "./Cart";
import "./styles.css";

const Header = () => {

  const {cart}=useContext(Cart);

  return (
    <div>
      {/* <span className="header">Use Context</span> */}
      <ul className="nav"> 
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart ({cart.length})</Link>
          {/* <Link to="/cart">Cart {Cart.length}</Link> */}
          {/* but main challenge  prop drilling so use of context api*/}
        </li>
      </ul>
    </div>
  );
};

export default Header;
 