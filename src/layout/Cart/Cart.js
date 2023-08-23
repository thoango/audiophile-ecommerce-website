import { useContext } from "react";

import CartItem from "./CartItem";
import Button from "../../UI/Button/Button";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const formatter = new Intl.NumberFormat("en-US");

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <div className={classes.header}>
        <p className={classes["header-title"]}>
          CART <span>({cartCtx.totalAmount})</span>
        </p>
        <button
          className={classes["header-button"]}
          onClick={cartCtx.removeAll}
        >
          Remove all
        </button>
      </div>
      <ul className={classes.list}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            slug={item.slug}
            onAddOne={() => {
              cartCtx.addItem({ ...item, amount: 1 });
            }}
            onRemoveOne={() => {
              cartCtx.removeItem(item.id);
            }}
            onBlur={cartCtx.changeAmount}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span className={classes["total-title"]}>TOTAL</span>
        <span className={classes["total-price"]}>
          $ {formatter.format(cartCtx.totalPrice)}
        </span>
      </div>
      <Button styleBtn="style01" className={classes.button}>
        CHECK OUT
      </Button>
    </div>
  );
};
export default Cart;
