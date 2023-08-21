import ProductOtherItem from "./ProductOtherItem";

import classes from "./ProductOthers.module.css";

const ProductOthers = (props) => {
  return (
    <div className={classes.others}>
      <h2 className={classes["others-title"]}>you may also like</h2>
      <ul className={classes["others-list"]}>
        {props.others &&
          props.others.map((item, index) => (
            <ProductOtherItem key={index} item={item}></ProductOtherItem>
          ))}
      </ul>
    </div>
  );
};
export default ProductOthers;
