import { useState, useContext } from "react";

import AmountInput from "../../UI/AmountInput/AmountInput";
import Button from "../../UI/Button/Button";
import CartContext from "../../store/cart-context";

import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [amount, setAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const changeAmountHandler = (event) => {
    const enteredInput = +event.target.value;
    if (enteredInput > 0) {
      setAmount(enteredInput);
    }
  };

  const addOneItem = () => {
    setAmount((prevAmount) => +prevAmount + 1);
  };

  const removeOneItem = () => {
    if (amount > 1) {
      setAmount((prevAmount) => +prevAmount - 1);
    }
  };

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      slug: props.slug,
      amount: amount,
    });
    setAmount(1);
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <AmountInput
        amount={amount}
        onChangeInput={changeAmountHandler}
        onAddOne={addOneItem}
        onRemoveOne={removeOneItem}
      ></AmountInput>
      <Button
        styleBtn="style01"
        className={classes.button}
        onClick={addToCartHandler}
      >
        ADD TO CART
      </Button>
    </form>
  );
};
export default ProductForm;
