import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

const CartPage = () => {
  const [total, setTotal] = useState();
  const {cart} = useContext(Cart);
  

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
      <div>
        <span style={{ fontSize: 50 }}>My Cart </span>
        <br />

        <div className="productContainer">
          {cart.map((product) => {
            return (
              <>
                <SingleProduct product={product} key={product.id} />;
              </>
            );
          })}
        </div>
        <br />
        <span style={{ fontSize: 50 }}> Total : ${total}</span>
      </div>
    </>
  );
};

export default CartPage;
