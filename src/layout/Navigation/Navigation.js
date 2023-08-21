import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <button className={classes["button-sp"]} onClick={props.onShowMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};
export default Navigation;
