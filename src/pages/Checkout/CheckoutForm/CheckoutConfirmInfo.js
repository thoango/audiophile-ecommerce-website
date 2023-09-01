import classes from "./CheckoutConfirmInfo.module.css";

const SHIPPING_FEE = 50;

const formatter = new Intl.NumberFormat("en-US");

const CheckoutConfirmInfo = (props) => {
  return (
    <div className={classes["cart-confirm"]}>
      <div className={classes["top-wrapper"]}>
        <div className={classes["item-wrapper"]}>
          <div className={classes.image}>
            <img
              src={`/assets/cart/image-${props.cart.items[0].slug}.jpg`}
              alt={props.cart.items[0].name}
            ></img>
          </div>
          <div className={classes.description}>
            <span className={classes["description-name"]}>
              {props.cart.items[0].name}
            </span>
            <span className={classes["description-price"]}>
              ${" "}
              {formatter.format(
                +props.cart.items[0].price * +props.cart.items[0].amount
              )}
            </span>
          </div>
          <div className={classes.amount}>
            <span>x{props.cart.items[0].amount}</span>
          </div>
        </div>
        <div className={classes.other}>
          <span>and {props.cart.items.length - 1} other item(s)</span>
        </div>
      </div>
      <div className={classes["bottom-wrapper"]}>
        <div className={classes["bottom-wrapper-inner"]}>
          <p className={classes["bottom-title"]}>GRAND TOTAL</p>
          <p className={classes["bottom-price"]}>
            $ {formatter.format(+props.cart.totalPrice + SHIPPING_FEE)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmInfo;
