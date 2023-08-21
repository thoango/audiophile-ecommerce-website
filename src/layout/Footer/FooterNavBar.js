import { NavLink } from "react-router-dom";

import classes from "./FooterNavBar.module.css";

const FooterNavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["navbar-list"]}>
        <li className={classes["navbar-item"]}>
          <NavLink to="">HOME</NavLink>
        </li>
        <li className={classes["navbar-item"]}>
          <NavLink to="/category/headphones">HEADPHONES</NavLink>
        </li>
        <li className={classes["navbar-item"]}>
          <NavLink to="/category/speakers">SPEAKERS</NavLink>
        </li>
        <li className={classes["navbar-item"]}>
          <NavLink to="/category/earphones">EARPHONES</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default FooterNavBar;
