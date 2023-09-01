import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import CartButton from "../Cart/CartButton";

import logo from "../../assets/logo.svg";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.navbar}>
      <Navigation onToggleMenu={props.onToggleMenu}></Navigation>
      <Link to="" className={classes["navbar-link"]}>
        <img src={logo} alt="audiophile logo"></img>
      </Link>
      <CartButton
        className={classes.button}
        onToggleCart={props.onToggleCart}
      ></CartButton>
    </nav>
  );
};
export default NavBar;
