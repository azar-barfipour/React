import CartContext from "./Cart-Context.js";
const CartProvider = (props) => {
  const addItemeToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    itemes: [],
    totalAmount: 0,
    additem: addItemeToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
