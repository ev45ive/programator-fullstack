export const updateCart = ({ cart, action, product_id, amount = 1 }) => {
  let item = cart.items.find((i) => i._id.toString() === product_id.toString());

  switch (action) {
    case "add":
      if (!item) {
        item = { _id: product_id, amount: 1 };
        cart.items.push(item);
      } else {
        item.amount += amount;
      }

      break;
    case "remove":
      if (item) {
        item.amount -= amount;

        if (item.amount <= 0) {
          cart.items.splice(cart.items.indexOf(item), 1);
        }
      }
      break;
    case "clear":
      cart.items.splice(0, cart.items.length);
      break;

    default:
      throw new Error("Unknown cart action " + action);
  }

  return cart;
};
