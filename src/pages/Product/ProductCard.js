import ProductForm from "./ProductForm";

import classes from "./ProductCard.module.css";

const formatter = new Intl.NumberFormat("en-US");

const ProductCard = (props) => {
  return (
    <article className={classes.productCard}>
      {props.new ? (
        <span className={`overline white ${classes.overline}`}>
          NEW PRODUCT
        </span>
      ) : null}
      <h1 className={classes.title}>{props.name}</h1>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.price}>${formatter.format(props.price)}</span>
      <ProductForm></ProductForm>
    </article>
  );
};
export default ProductCard;
