import React, { useState } from "react";
import axios from "axios";
import api_url from "../../config";
const Cms = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  
  // const [insertProduct, postProduct] = useState([]);

  const postProduct = (event) => {
    event.preventDefault();
    axios.post("http://192.168.0.146:8880/api/products", {
      name: product_name,
      description: product_description
    });
console.log(product_name,product_description)
  };

  return (
    <form>
      <input
        type="text"
        placeholder="enter product name"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter product description"
        value={product_description}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="submit"
        value="submit"
        onClick={postProduct}
      />
    </form>
  );
};

export default Cms
