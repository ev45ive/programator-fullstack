import React, { useState, useEffect } from "react";

export const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div className="media" key={product._id}>
          <img src={product.images[0]} className="mr-3" />
          <div className="media-body">
            <h5 className="mt-0">{product.name}</h5>
            {product.description}

            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/api/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p className="alert alert-info">Please wait, Loading...</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
};
