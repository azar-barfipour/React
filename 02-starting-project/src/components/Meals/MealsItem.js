import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../Store/Cart-Context";

const MealsItem = (props) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addIteme({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MealsItemForm>
      </div>
    </li>
  );
};
export default MealsItem;
