import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, enteredCartShown] = useState(false);
  const cartIsShownHandler = () => {
    enteredCartShown(true);
  };
  const cartIsHideHandler = () => {
    enteredCartShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={cartIsHideHandler} />}
      <Header onShownCart={cartIsShownHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
