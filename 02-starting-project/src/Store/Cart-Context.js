import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addIteme: (item) => {},
  removeIteme: (id) => {},
});

export default CartContext;
