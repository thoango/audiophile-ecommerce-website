import { useContext } from "react";

import CheckoutCartList from "./CheckoutCartList";
import CheckCartSummary from "./CheckoutCartSummary";
import Button from "../../../UI/Button/Button";
import CartContext from "../../../store/cart-context";

import classes from "./CheckoutCart.module.css";

const CheckoutCart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>summary</h2>
      <CheckoutCartList items={cartCtx.items}></CheckoutCartList>
      <CheckCartSummary totalPrice={cartCtx.totalPrice}></CheckCartSummary>
      <Button
        className={classes.button}
        styleBtn="style01"
        onClick={props.onClick}
      >
        CONTINUE & PAY
      </Button>
    </section>
  );
};
export default CheckoutCart;
