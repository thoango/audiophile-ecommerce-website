import { useState, useEffect, useContext } from "react";

import CartContext from "../../store/cart-context";

import cartIcon from "../../assets/cart/cart-logo.svg";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [isBumping, setIsBumping] = useState(false);

  const cartCtx = useContext(CartContext);
  const { totalAmount } = cartCtx;

  useEffect(() => {
    if (totalAmount === 0) {
      return;
    }

    setIsBumping(true);

    const timer = setTimeout(() => {
      setIsBumping(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  return (
    <>
      <button
        className={`${props.className} ${isBumping && classes.bump}`}
        onClick={props.onToggleCart}
      >
        <img src={cartIcon} alt="cart icon"></img>
      </button>
    </>
  );
};
export default CartButton;
