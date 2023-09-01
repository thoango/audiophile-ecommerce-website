import Input from "../../../UI/Input/Input";
import Fieldset from "../../../UI/Fieldset/Fieldset";

import classes from "./CheckoutBillingDetails.module.css";

const CheckoutBillingDetails = (props) => {
  return (
    <Fieldset title="Billing details">
      <div className={classes.wrapper}>
        <Input
          id="name"
          type="text"
          label="Name"
          placeholder="Alexei Ward"
          onBlur={props.onBlur}
          error={props.errors.name}
        ></Input>
      </div>
      <div className={classes.wrapper}>
        <Input
          id="email"
          type="email"
          label="Email Address"
          placeholder="alexei@mail.com"
          onBlur={props.onBlur}
          error={props.errors.email}
        ></Input>
      </div>
      <div className={classes.wrapper}>
        <Input
          id="phone"
          type="number"
          label="Phone Number"
          placeholder="12025550136"
          onBlur={props.onBlur}
          error={props.errors.phone}
        ></Input>
      </div>
    </Fieldset>
  );
};
export default CheckoutBillingDetails;
