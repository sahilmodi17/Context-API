import React, { useContext } from "react";
import "./styles.css";
import { Cart } from "../Context";

const SingleProduct = ({ product }) => {
  const { name, id, price, image } = product;

  const { cart, setCart } = useContext(Cart);
  return (
    <>
      <div key={id} className="products">
        <div className="image">
          <img className="img" src={image} alt={name} />
        </div>
        <div className="productDesc">
          <span>{name}</span>
          <span>{`$${price}`}</span>
        </div>
        {cart.includes(product) ? (
          <button
            className="add"
            onClick={() => {
              setCart(cart.filter((pid) => id !== pid.id));
            }}
          >
            Remove from the cart
          </button>
        ) : (
          <button
            className="add"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
