import Card from "../../components/Card/Card";

import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-image"]}>
        <img
          className="sp"
          src={`.${props.categoryImage.mobile}`}
          alt={props.name}
        ></img>
        <img
          className="tablet"
          src={`.${props.categoryImage.tablet}`}
          alt={props.name}
        ></img>
        <img
          className="pc"
          src={`.${props.categoryImage.desktop}`}
          alt={props.name}
        ></img>
      </div>
      <Card
        styleBtn="style01"
        productName={props.name}
        discription={props.description}
        new={props.new}
        background="white"
        destination={`/product/${props.id}`}
      ></Card>
    </li>
  );
};

export default CategoryItem;
