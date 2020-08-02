import mongoose from "mongoose";

export const cartSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    items: [
      {
        id: mongoose.Types.ObjectId,
        amount: Number,
        price: { type: String, default: 100, select: true },
      },
    ],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

cartSchema.virtual("total").get(function () {
  return this.items.reduce(
    (total, { price, amount }) => (total += parseFloat(price) * amount),
    0
  );
});

export const Cart = mongoose.model("Cart", cartSchema);
