import React, { useContext, useState } from "react";
import products from "../product";
import SingleProduct from "./SingleProduct";

const url=""

const Home = ( ) => {
  // console.log(products);

  const [product,] = useState(products);
  
  
  

  return (
    <div className="productContainer">
      {product.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Home;
