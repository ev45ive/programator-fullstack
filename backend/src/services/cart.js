export const updateCart = ({ cart, action, product_id, amount = 1 }) => {
  let item = cart.items.find((i) => i.id === product_id);

  switch (action) {
    case "add":
      if (!item) {
        item = { id: product_id, amount: 0 };
        cart.items.push(item);
      }
      item.amount += amount;

      break;
    case "remove":
      if (item) {
        item.amount -= amount;

        if (item.amount <= 0) {
          cart.items.splice(cart.items.indexOf(item), 1);
        }
      }
      break;

    default:
      throw new Error("Unknown cart action " + action);
  }

  return cart;
};
