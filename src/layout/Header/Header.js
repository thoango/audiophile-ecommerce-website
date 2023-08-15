import NavBar from "../NavBar/NavBar";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar></NavBar>
    </header>
  );
};
export default Header;
