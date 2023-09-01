import { useState, useEffect } from "react";

import Fieldset from "../../../UI/Fieldset/Fieldset";
import Input from "../../../UI/Input/Input";
import InputRadio from "../../../UI/InputRadio/InputRadio";

import classes from "./CheckoutPaymentDetails.module.css";

const CheckoutPaymentDetails = (props) => {
  const [isEMoneyChecked, setIsEMoneyChecked] = useState(true);
  const [isCashedChecked, setIsCashChecked] = useState(false);

  const checkEMoneyHandler = () => {
    setIsEMoneyChecked((prevState) => !prevState);
    setIsCashChecked((prevState) => !prevState);
  };

  const checkCashedHandler = () => {
    setIsEMoneyChecked((prevState) => !prevState);
    setIsCashChecked((prevState) => !prevState);
  };

  useEffect(() => {
    if (isEMoneyChecked) {
      props.onBlur({ payment: "e-money" });
    } else if (isCashedChecked) {
      props.onBlur({ payment: "cash" });
    }
  }, [isEMoneyChecked, isCashedChecked]);

  return (
    <Fieldset title="payment details">
      <div className={classes.input}>
        <p className={classes.title}>Payment Method</p>
        <div className={classes.wrapper}>
          <InputRadio
            id="emoney"
            type="radio"
            label="e-Money"
            value="emoney"
            name="payment-method"
            checked={isEMoneyChecked}
            onChange={checkEMoneyHandler}
          ></InputRadio>
          <InputRadio
            id="cash"
            type="radio"
            label="Cash on Delivery"
            value="cash"
            name="payment-method"
            checked={isCashedChecked}
            onChange={checkCashedHandler}
          ></InputRadio>
        </div>
      </div>
      {isEMoneyChecked && (
        <>
          <div className={classes.wrapper}>
            <Input
              id="eNumber"
              type="number"
              label="e-Money Number"
              placeholder="238521993"
              onBlur={props.onBlur}
              error={props.errors.eNumber}
            ></Input>
          </div>
          <div className={classes.wrapper}>
            <Input
              id="ePin"
              type="number"
              label="e-Money PIN"
              placeholder="6891"
              onBlur={props.onBlur}
              error={props.errors.ePin}
            ></Input>
          </div>
        </>
      )}
    </Fieldset>
  );
};
export default CheckoutPaymentDetails;
