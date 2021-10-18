import { useReducer } from "react";
import CartContext from "./Cart-Context.js";

const defualtReducer = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItemes = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItemes,
      totalAmount: updatedTotalAmount,
    };
  }

  return defualtReducer;
};
const CartProvider = (props) => {
  const [stateCart, dispatchCartAction] = useReducer(
    cartReducer,
    defualtReducer
  );

  const addItemeToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: stateCart.items,
    totalAmount: stateCart.totalAmount,
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
