import Button from "../../UI/Button/Button";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={classes.item}>
      <article className={classes.itemWrap}>
        <div className={`${classes[props.name]} ${classes.imageWrap}`}>
          <img src={props.imageSrc} alt={props.name}></img>
        </div>
        <h6 className={classes.itemTitle}>{props.name}</h6>
        <Button styleBtn="style03" className={classes.button}>
          SHOP <span></span>
        </Button>
      </article>
    </li>
  );
};
export default MenuItem;
