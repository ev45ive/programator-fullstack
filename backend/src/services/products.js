import { Product, InitProducts } from "../models/products.js";

export const getAllProducts = async ({ name, limit = 10, page = 1 }) => {
  // page = 2
  const skip = (page - 1) * limit;

  return Product.find({
    name: {
      $regex: name || "",
      $options: "-i",
    },
  })
    .skip(skip)
    .limit(limit);
};

export const getOneProduct = async ({ id }) => {
  return Product.findById(id);
};

export const createProduct = async ({ name, description, price, images }) => {
  const product = new Product({
    name,
    description,
    price,
    images,
  });
  return product.save();
};

export const updateProduct = async ({ id, name, description, price }) => {
  const product = Product.findById(id);

  return product.update({ name, description, price });
};

export const deleteProduct = async ({ product_id }) => {
  const result = Product.deleteOne({ _id: product_id });
  return result;
};
