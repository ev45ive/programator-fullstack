import { WishList } from "../models/wishlist.js";

export const getAllWishlists = async ({ }) => {
    return WishList.find();
  };


export const getOneWishlist = async ({ id }) => {
  return WishList.findById(id);
};

export const createWishlist = async ({ name, products }) => {
  const wishlist = new WishList({
    name,
    products
  });
  return wishlist.save();
};

export const updateWishlist = async ({ id, name, products }) => {
  const wishlist = WishList.findById(id);

  return wishlist.update({ name, products });
};

export const deleteWishlist = async ({ wishlist_id }) => {
  const result = WishList.deleteOne({ _id: wishlist_id });
  return result;
};
