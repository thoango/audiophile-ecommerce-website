import NavBar from "../NavBar/NavBar";
import Kanban from "../Kanban/Kanban";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-navbar"]}>
        <NavBar></NavBar>
      </div>
      <Kanban></Kanban>
    </header>
  );
};
export default Header;
