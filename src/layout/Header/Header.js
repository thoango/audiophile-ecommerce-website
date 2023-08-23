import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Kanban from "../Kanban/Kanban";
import HeaderCategory from "./HeaderCategory";
import Modal from "../../UI/Modal/Modal";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

import classes from "./Header.module.css";

const Header = (props) => {
  const [isMenuShowed, setIsMenuShowed] = useState(false);
  const [isCartShowed, setIsCartShowed] = useState(false);
  const page = props.page;

  const toggleMenuHandler = () => {
    setIsMenuShowed((prevState) => !prevState);
  };

  const closeMenuHandler = () => {
    setIsMenuShowed(false);
  };

  const toggleCartHandler = () => {
    setIsCartShowed((prevState) => !prevState);
  };

  const closeCartHandler = () => {
    setIsCartShowed(false);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-navbar"]}>
          <NavBar
            onToggleMenu={toggleMenuHandler}
            onToggleCart={toggleCartHandler}
          ></NavBar>
        </div>
        {!props.page && <Kanban></Kanban>}
        {page === "headphones" ||
        page === "earphones" ||
        page === "speakers" ? (
          <HeaderCategory title={props.page} />
        ) : null}
      </header>
      {isMenuShowed && (
        <Modal className={classes["modal-menu"]} onClose={closeMenuHandler}>
          <Menu></Menu>
        </Modal>
      )}
      {isCartShowed && (
        <Modal className={classes["modal-cart"]} onClose={closeCartHandler}>
          <Cart></Cart>
        </Modal>
      )}
    </>
  );
};
export default Header;
