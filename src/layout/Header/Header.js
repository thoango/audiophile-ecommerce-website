import NavBar from "../NavBar/NavBar";
import Kanban from "../Kanban/Kanban";
import HeaderCategory from "./HeaderCategory";

import classes from "./Header.module.css";

const Header = (props) => {
  const page = props.page;
  return (
    <header className={classes.header}>
      <div className={classes["header-navbar"]}>
        <NavBar></NavBar>
      </div>
      {!props.page && <Kanban></Kanban>}
      {page === "headphones" || page === "earphones" || page === "speakers" ? (
        <HeaderCategory title={props.page} />
      ) : null}
    </header>
  );
};
export default Header;
