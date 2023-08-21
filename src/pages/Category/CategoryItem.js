import Card from "../../components/Card/Card";

import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-image"]}>
        <img src={`.${props.categoryImage}`} alt={props.name}></img>
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
