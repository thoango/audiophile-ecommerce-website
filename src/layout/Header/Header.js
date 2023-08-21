import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Kanban from "../Kanban/Kanban";
import HeaderCategory from "./HeaderCategory";
import Modal from "../../UI/Modal/Modal";
import Menu from "../Menu/Menu";

import classes from "./Header.module.css";

const Header = (props) => {
  const [isMenuShowed, setIsMenuShowed] = useState(false);
  const page = props.page;

  const toggleMenuHandler = () => {
    setIsMenuShowed((prevState) => !prevState);
  };

  const closeMenuHandler = () => {
    setIsMenuShowed(false);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-navbar"]}>
          <NavBar onToggleMenu={toggleMenuHandler}></NavBar>
        </div>
        {!props.page && <Kanban></Kanban>}
        {page === "headphones" ||
        page === "earphones" ||
        page === "speakers" ? (
          <HeaderCategory title={props.page} />
        ) : null}
      </header>
      {isMenuShowed && (
        <Modal className={classes.modal} onCloseMenu={closeMenuHandler}>
          <Menu></Menu>
        </Modal>
      )}
    </>
  );
};
export default Header;
