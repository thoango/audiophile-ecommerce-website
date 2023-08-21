import Button from "../../UI/Button/Button";

import classes from "./ProductForm.module.css";

const ProductForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <span>-</span>
        <input value="1" />
        <span>+</span>
      </div>
      <Button styleBtn="style01" className={classes.button}>
        ADD TO CART
      </Button>
    </form>
  );
};
export default ProductForm;
