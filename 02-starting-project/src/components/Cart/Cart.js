import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
  ];
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes[`cart-items`]}>
        {cartItems.map((cartItem) => {
          <li>{cartItem.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>total</span>
        <span>25$</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          close
        </button>
        <button className={classes[`button--alt`]}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
