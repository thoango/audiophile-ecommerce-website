import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <button className={classes["button-sp"]} onClick={props.onToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={classes["navi-pc"]}>
        <li className={classes["navi-item"]}>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className={classes["navi-item"]}>
          <NavLink to="/category/headphones">HEADPHONES</NavLink>
        </li>
        <li className={classes["navi-item"]}>
          <NavLink to="/category/speakers">SPEAKERS</NavLink>
        </li>
        <li className={classes["navi-item"]}>
          <NavLink to="/category/earphones">EARPHONES</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
