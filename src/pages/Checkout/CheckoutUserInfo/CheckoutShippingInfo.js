import Fieldset from "../../../UI/Fieldset/Fieldset";
import Input from "../../../UI/Input/Input";

import classes from "./CheckoutShippingInfo.module.css";

const CheckoutShippingInfo = (props) => {
  return (
    <Fieldset title="shipping info">
      <Input
        id="address"
        type="text"
        label="Your Address"
        placeholder="1137 Williams Avenue"
        onBlur={props.onBlur}
        error={props.errors.address}
      ></Input>
      <div className={classes.wrapper}>
        <Input
          id="zipcode"
          type="number"
          label="ZIP Code"
          placeholder="10001"
          onBlur={props.onBlur}
          error={props.errors.zipcode}
        ></Input>
      </div>
      <div className={classes.wrapper}>
        <Input
          id="city"
          type="text"
          label="City"
          placeholder="New York"
          onBlur={props.onBlur}
          error={props.errors.city}
        ></Input>
      </div>
      <div className={classes.wrapper}>
        <Input
          id="country"
          type="text"
          label="Country"
          placeholder="United States"
          onBlur={props.onBlur}
          error={props.errors.country}
        ></Input>
      </div>
    </Fieldset>
  );
};

export default CheckoutShippingInfo;
