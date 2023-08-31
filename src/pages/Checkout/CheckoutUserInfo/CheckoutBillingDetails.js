import Input from "../../../UI/Input/Input";
import Fieldset from "../../../UI/Fieldset/Fieldset";

import classes from "./CheckoutBillingDetails.module.css";

const CheckoutBillingDetails = (props) => {
  return (
    <Fieldset title="Billing details">
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Alexei Ward"
        onBlur={props.onBlur}
        error={props.errors.name}
      ></Input>
      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="alexei@mail.com"
        onBlur={props.onBlur}
        error={props.errors.email}
      ></Input>
      <Input
        id="phone"
        type="number"
        label="Phone Number"
        placeholder="12025550136"
        onBlur={props.onBlur}
        error={props.errors.phone}
      ></Input>
    </Fieldset>
  );
};
export default CheckoutBillingDetails;
