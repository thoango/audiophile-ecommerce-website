import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Cart from "../Cart/Cart";

import logo from "../../assets/logo.svg";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <Navigation></Navigation>
      <Link to="" className={classes["navbar-link"]}>
        <img src={logo} alt="audiophile logo"></img>
      </Link>
      <Cart></Cart>
    </nav>
  );
};
export default NavBar;
