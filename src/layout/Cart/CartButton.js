import cartIcon from "../../assets/cart/cart-logo.svg";

const CartButton = (props) => {
  return (
    <>
      <button onClick={props.onToggleCart}>
        <img src={cartIcon} alt="cart icon"></img>
      </button>
    </>
  );
};
export default CartButton;
