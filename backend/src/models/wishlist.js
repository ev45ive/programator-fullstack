import mongoose from "mongoose";

export const wishlistSchema = mongoose.Schema({
  name: String,
  products: Array,
});

export const WishList = mongoose.model("Wishlist", wishlistSchema);

export const InitWishList= () => {
  const wishlist1 = new WishList({
    name: "WishList 1",
    products: [],
  });
  const wishlist2 = new WishList({
    name: "WishList 2",
    products: [],
  });
  const wishlist3 = new WishList({
    name: "WishList 3",
    products: [],
  });

  return Promise.all([
    wishlist1.save().then(() => console.log("saved wishlist1")),
    wishlist2.save().then(() => console.log("saved wishlist2")),
    wishlist3.save().then(() => console.log("saved wishlist3")),
  ]);
};