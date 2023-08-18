import Button from "../../UI/Button/Button";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <article className={`${classes.card} ${classes[props.background]}`}>
      {props.new ? (
        <span className={`overline ${props.background}`}>NEW PRODUCT</span>
      ) : null}
      <h1 className={classes.title}>{props.productName}</h1>
      <p className={classes.discription}>{props.discription}</p>
      <Button styleBtn={props.styleBtn}>See Product</Button>
    </article>
  );
};
export default Card;
