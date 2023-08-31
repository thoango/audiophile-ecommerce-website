import classes from "./Fieldset.module.css";

const Fieldset = (props) => {
  return (
    <fieldset className={classes.wrapper}>
      <legend className={classes.title}>{props.title}</legend>
      {props.children}
    </fieldset>
  );
};
export default Fieldset;
