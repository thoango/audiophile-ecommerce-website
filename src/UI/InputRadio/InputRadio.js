import classes from "./InputRadio.module.css";

const InputRadio = (props) => {
  return (
    <div className={classes.input}>
      <input
        className={classes["visually-hidden"]}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked || false}
      ></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default InputRadio;
