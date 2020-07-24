import React from "react";

const ProductCard = () => {
  return (
    <>
       {productsArray.map((product) => (

      <div className="product-cart" key={product._id}>
        <img src={product.images} alt="no_image" />
        <div className="description">
          <h5>Descriptions:</h5>
          <p>{product.description}</p>
          <h5>{product.name}</h5>
          <p>Size: {product.size}</p>
          <small>Quanity: {product.quanity}</small>
          <div>Price: {product.price}</div>
        </div>
        <div className="product cart-btns">
          <button className="btn-primary" onClick={() => setCount(count + 1)}>
            {count} Like
          </button>
          <button
            className="btn-danger"
            onClick={() => setUnCount(uncount - 1)}
          >
            {uncount} Hate
          </button>
          <button
            //  onClick={addToCart}
            className="btn-primary"
          >
            <p>Add to Cart</p> <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
        ))}

    </>
  );
};

export default ProductCard;
