import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/Store/CartProvider";

function App() {
  const [cartIsShown, enteredCartShown] = useState(false);
  const cartIsShownHandler = () => {
    enteredCartShown(true);
  };
  const cartIsHideHandler = () => {
    enteredCartShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={cartIsHideHandler} />}
      <Header onShownCart={cartIsShownHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
