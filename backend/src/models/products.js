import mongoose from "mongoose";

export const productSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  description: String,
  price: Number,
  images: { type: [String] },
  category: String,
});

export const Product = mongoose.model("Product", productSchema);

export const InitProducts = () => {
  const prod1 = new Product({
    name: "Product A",
    description: "Some description",
    price: 100,
  });
  const prod2 = new Product({
    name: "Product ABC",
    description: "Some description",
    price: 200,
  });
  const prod3 = new Product({
    name: "Product CDE",
    description: "Some description",
    price: 150,
  });

  return Promise.all([
    prod1.save().then(() => console.log("saved prod1")),
    prod2.save().then(() => console.log("saved prod2")),
    prod3.save().then(() => console.log("saved prod3")),
  ]);
};
