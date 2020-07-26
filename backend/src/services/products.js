import { Product, InitProducts } from "../models/products.js";

export const getAllProducts = async ({ name, limit = 10 }) => {
  return Product.find({
    name: {
      $regex: name || "",
    },
  }).limit(limit);
};

export const getOneProduct = async ({ id }) => {
  return Product.findById(id);
};

export const createProduct = async ({ name, description, price }) => {
  const product = new Product({
    name,
    description,
    price,
  });
  return product.save();
};

export const updateProduct = async ({ id, name, description, price }) => {
  const product = Product.findById(id);

  return product.update({ name, description, price });
};
