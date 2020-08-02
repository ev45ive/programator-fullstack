import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const WishList = ({ wishlist }) => {
  debugger
  return (
 
    <div>
         <h1>{wishlist.name}</h1>
      { wishlist.products && wishlist.products.map((product) => (
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

export const WishListProducts = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const params = new URLSearchParams({
      limit: queryParams.get("limit") || 10,
      page: queryParams.get("page") || 1,
      name: queryParams.get("name") || '',
    });
    setIsLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/wishlist/5f26758a787708987d180aa1?" + params.toString())
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p className="alert alert-info">Please wait, Loading...</p>;
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <WishList wishlist={products} />
    </div>
  );
};
