import { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [enteredInput, setEnteredInput] = useState("");

  const enterInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  return (
    <div className={`${classes.input} ${props.error && classes.error}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.id}
        value={enteredInput}
        placeholder={props.placeholder}
        onChange={enterInputHandler}
        onBlur={() => {
          props.onBlur({ [props.id]: enteredInput });
        }}
      ></input>
      {props.error && (
        <span className={classes["error-message"]}>{props.error}</span>
      )}
    </div>
  );
};
export default Input;
