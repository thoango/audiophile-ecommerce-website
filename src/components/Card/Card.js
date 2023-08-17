import Button from "../../UI/Button/Button";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <article className={`${classes.card} ${classes.background}`}>
      {props.new ? <span className="overline black">NEW PRODUCT</span> : null}
      <h1 className={classes.title}>
        XX99 Mark II
        <br />
        HeadphoneS
      </h1>
      <p className={classes.discription}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button styleBtn={props.styleBtn}>See Product</Button>
    </article>
  );
};
export default Card;
