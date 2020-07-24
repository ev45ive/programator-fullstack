import React, { useRef, useState, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
// import api_url from "../../config";
import axios from "axios";
import Header from "../header";
// import { NavLink } from 'react-router-dom';

console.log("Products componentd loaded");

const Products = () => {
  const [productsArray, setProductsList] = useState([]);
  const productsLandingFix = () => {
    document.querySelector("#root > div.subpage-lauout").style = "top:120px";
  };
  const [isLoading, setIsLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);

  useEffect(() => {
    axios
      .get("http://85.222.120.170:15118/api/products/")
      .then((res) => {
        const products = res.data;
        console.log(products);
        setProductsList(products);
        console.log(products.product._id);
        setIsLoading(false);
        productsLandingFix();
      })
      .catch((error) => console.log(error));
  }, []);

  const buttonRef = createRef();
  const focusButton = () => {
    console.log(buttonRef.current);
  };

  return (
    <>
      {isLoading && <p>Products loading, please wait.</p>}

      <div className="subpage-lauout">
        {productsArray.map((product) => (
          <div class="card" key={product._id}>
            <div className="first-price">tap to more info -----  ${product.price}</div>
            <figure>
              <img src={product.images} alt="alt" />
            </figure>
            <section class="details">
              <div class="min-details">
                <h1>
                  {product.name}
                  <span>{product.category}</span>
                </h1>
                <h1 class="price">${product.price}</h1>
              </div>

              <div class="options">
                <div class="options-colors">
                  <span>{product.description}</span>
                </div>
                <div class="options-size">
                  <h1>
                    On stock: {product.quanity} ({product.on_stock})
                  </h1>
                </div>
              </div>
              <a href="#" class="btn">
                add to cart
              </a>
            </section>
          </div>
        ))}
      </div>
    </>
  );

  return <></>;
};
export default Products;
