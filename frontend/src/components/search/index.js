import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { NavLink } from "react-router-dom";

console.log("Search componentd loaded");

const Search = () => {
  const [search_input, setProductsList] = useState([]);
  const [search_result, setResultList] = useState([]);
  // const [query, setQueryResult] = useState([]);
  // console.log(search_input);
  console.log(search_result);
  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);
  const productsLandingFix = () => {
    document.querySelector("#root > div.subpage-lauout").style = "top:95px";
  };
  console.log(search_input)

  const query = () => {
    Axios.get(
      `http://85.222.120.170:15118/api/products/search?name=${search_input}`
    ).then((res) => {
      const result = res.data;
      setResultList(result);
      // setQueryResult(query);
      productsLandingFix();
      console.log(result);
    });
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-bar-items">
          <input
            className="search"
            type="text"
            placeholder="What do you search?"
            value={search_input}
            onChange={(e) => setProductsList(e.target.value)}
            onKeyDown={query}
          ></input>
          <button className="search-bar-btn" type="submit" onClick={query}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="subpage-lauout">
        {search_result.map((product) => (
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
};
export default Search;
