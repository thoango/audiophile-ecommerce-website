import Button from "../../UI/Button/Button";

import classes from "./ProductOtherItem.module.css";

const ProductOtherItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-wrap"]}>
        <div className={classes["item-image"]}>
          <img
            className="sp"
            src={`.${props.item.image.mobile}`}
            alt={props.item.name}
          ></img>
          <img
            className="tablet"
            src={`.${props.item.image.tablet}`}
            alt={props.item.name}
          ></img>
        </div>
        <div>
          <h3 className={classes["item-title"]}>{props.item.name}</h3>
          <Button
            styleBtn="style01"
            className={classes["item-button"]}
            destination={`/product/${props.item.id}`}
          >
            see product
          </Button>
        </div>
      </div>
    </li>
  );
};
export default ProductOtherItem;
