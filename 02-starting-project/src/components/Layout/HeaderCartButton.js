import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
const HeaderCartButton = (props) => {
  const cardCtx = useContext(CartContext);
  const numberOfCartItemes = cardCtx.items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{numberOfCartItemes}</span>
    </button>
  );
};

export default HeaderCartButton;
