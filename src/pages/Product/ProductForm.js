import { useState } from "react";

import Button from "../../UI/Button/Button";

import classes from "./ProductForm.module.css";

const ProductForm = () => {
  const [amount, setAmount] = useState(1);

  const changeAmountHandler = (event) => {
    const enteredInput = event.target.value;
    setAmount(enteredInput);
  };

  const addOneItem = () => {
    setAmount((prevAmount) => +prevAmount + 1);
  };

  const minusOneItem = () => {
    if (amount > 1) {
      setAmount((prevAmount) => +prevAmount - 1);
    }
  };

  const addToCartHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <div className={classes.input}>
        <span onClick={minusOneItem}>-</span>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={changeAmountHandler}
        />
        <span onClick={addOneItem}>+</span>
      </div>
      <Button styleBtn="style01" className={classes.button}>
        ADD TO CART
      </Button>
    </form>
  );
};
export default ProductForm;
