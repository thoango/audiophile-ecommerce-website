import CheckoutBillingDetails from "./CheckoutBillingDetails";
import CheckoutShippingInfo from "./CheckoutShippingInfo";
import CheckoutPaymentDetails from "./CheckoutPaymentDetails";

import classes from "./CheckoutUserInfo.module.css";

const CheckoutUserInfo = (props) => {
  return (
    <fieldset className={classes.wrapper}>
      <legend className={classes.title}>CHECKOUT</legend>
      <CheckoutBillingDetails
        onBlur={props.onBlur}
        errors={props.errors}
      ></CheckoutBillingDetails>
      <CheckoutShippingInfo
        onBlur={props.onBlur}
        errors={props.errors}
      ></CheckoutShippingInfo>
      <CheckoutPaymentDetails
        onBlur={props.onBlur}
        errors={props.errors}
      ></CheckoutPaymentDetails>
    </fieldset>
  );
};
export default CheckoutUserInfo;
