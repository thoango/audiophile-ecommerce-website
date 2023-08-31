import checkedImg from "../../../assets/checkout/icon-order-confirmation.svg";

import CheckoutConfirmInfo from "./CheckoutConfirmInfo";
import Button from "../../../UI/Button/Button";

import classes from "./CheckoutConfirmation.module.css";

const CheckoutConfirmation = (props) => {
  return (
    <div className={classes.confirm}>
      <div className={classes.image}>
        <img src={checkedImg}></img>
      </div>
      <h1 className={classes.title}>
        THANK YOU
        <br />
        FOR YOUR ORDER
      </h1>
      <p className={classes.text}>
        You will receive an email confirmation shortly.
      </p>
      <CheckoutConfirmInfo cart={props.cart}></CheckoutConfirmInfo>
      <Button className={classes.button} destination="/" styleBtn="style01">
        BACK TO HOME
      </Button>
    </div>
  );
};

export default CheckoutConfirmation;
