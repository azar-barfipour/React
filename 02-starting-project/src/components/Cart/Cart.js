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
  ];
  const cartList = cartItems.map((cartItem) => {
    return <li>{cartItem.name}</li>;
  });
  console.log(cartList);
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes[`cart-items`]}>{cartList}</ul>
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
