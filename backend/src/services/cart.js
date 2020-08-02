
export const addToCart = ({ cart, product_id, amount = 1 }) => {
  let item = cart.items.find((i) => i.id === product_id);
  
  if (item) {
    item.amount++;
  } else {
    item = { id: product_id, amount };
    cart.items.push(item);
  }
  return cart;
};
