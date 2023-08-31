import CheckoutCartItem from "./CheckoutCartItem";

import classes from "./CheckoutCartList.module.css";

const CheckoutCartList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <CheckoutCartItem key={item.id} item={item}></CheckoutCartItem>
      ))}
    </ul>
  );
};

export default CheckoutCartList;
