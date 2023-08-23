import { useEffect, useState } from "react";

import AmountInput from "../../UI/AmountInput/AmountInput";

import classes from "./CartItem.module.css";

const formatter = new Intl.NumberFormat("en-US");

const CartItem = (props) => {
  const [updatedAmount, setUpdatedAmount] = useState(props.amount);

  const changeInputValueHandler = (event) => {
    const updatedValue = +event.target.value;
    if (updatedValue > 0) {
      setUpdatedAmount(updatedValue);
    }
  };

  const blurInputHandler = () => {
    props.onBlur(props.id, updatedAmount);
  };

  useEffect(() => {
    setUpdatedAmount(props.amount);
  }, [props.amount]);

  return (
    <li className={classes.item}>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img
            src={`/assets/cart/image-${props.slug}.jpg`}
            alt={props.name}
          ></img>
        </div>
        <div className={classes.description}>
          <span className={classes["description-name"]}>{props.name}</span>
          <span className={classes["description-price"]}>
            $ {formatter.format(+props.price * +props.amount)}
          </span>
        </div>
        <AmountInput
          className={classes.input}
          amount={updatedAmount}
          onAddOne={props.onAddOne}
          onRemoveOne={props.onRemoveOne}
          onChangeInput={changeInputValueHandler}
          onBlur={blurInputHandler}
        ></AmountInput>
      </div>
    </li>
  );
};
export default CartItem;
