import * as functions from "../../../utils/functions";

import classes from "./CheckoutCartItem.module.css";

const formatter = new Intl.NumberFormat("en-US");

const CheckoutCartItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img
            src={`/assets/cart/image-${props.item.slug}.jpg`}
            alt={props.item.name}
          ></img>
        </div>
        <div className={classes.description}>
          <span className={classes["description-name"]}>
            {functions.shortenProductName(props.item.name)}
          </span>
          <span className={classes["description-price"]}>
            $ {formatter.format(+props.item.price * +props.item.amount)}
          </span>
        </div>
        <div className={classes.amount}>
          <span>x{props.item.amount}</span>
        </div>
      </div>
    </li>
  );
};
export default CheckoutCartItem;
