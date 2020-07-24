import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import api_url from "../../config";
import axios from "axios";
// import { NavLink } from 'react-router-dom';

console.log("Books componentd loaded");

const Books = () => {
  const [productsArray, setProductsList] = useState([]);
  // const [cartArray, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isEmpty, setIsEmpty] = useState(true);

  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);
  // const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://85.222.120.170:15118/api/products/categories?category=Books")
      .then((res) => {
        const products = res.data;
        console.log(products);
        setProductsList(products);
        setIsLoading(false);
        // if (productsArray.length < 1) {
        //   setIsEmpty(false);
        // }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      {isLoading && <p>Books loading, please wait.</p>}
      {/* {isEmpty && <><p>No products in data base.</p><h2>Please add a products!</h2></>} */}
      <div className="subpage-lauout">

        {productsArray.map((product) => (
         <div class="card" key={product._id}>
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
export default Books;
