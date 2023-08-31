import classes from "./CheckoutCartSummary.module.css";

const SHIPPING_FEE = 50;

const formatter = new Intl.NumberFormat("en-US");

const CheckoutCartSummary = (props) => {
  return (
    <div className={classes.summary}>
      <dl className={classes.list}>
        <dt className={classes.term}>TOTAL</dt>
        <dd className={classes.description}>
          $ {formatter.format(props.totalPrice)}
        </dd>
        <dt className={classes.term}>SHIPPING</dt>
        <dd className={classes.description}>$ {SHIPPING_FEE}</dd>
        <dt className={classes.term}>VAT (INCLUDED)</dt>
        <dd className={classes.description}>
          $ {formatter.format(Math.round((+props.totalPrice * 10) / 100))}
        </dd>
        <dt className={classes.term}>GRAND TOTAL</dt>
        <dd className={classes.description}>
          $ {formatter.format(+props.totalPrice + SHIPPING_FEE)}
        </dd>
      </dl>
    </div>
  );
};

export default CheckoutCartSummary;
