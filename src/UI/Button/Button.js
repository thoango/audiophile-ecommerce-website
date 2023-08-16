import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link
      to={props.destination}
      className={`${classes.button} ${classes[props.styleBtn]} ${
        props.className
      }`}
    >
      {props.children}
    </Link>
  );
};
export default Button;
