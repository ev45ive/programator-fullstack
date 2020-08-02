import mongoose from "mongoose";

export const cartSchema = mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  items: [
    {
      id: mongoose.Types.ObjectId,
      amount: Number,
    },
  ],
});


export const Cart = mongoose.model("Cart", cartSchema);
