import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <button className={classes["button-sp"]} onClick={props.onToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};
export default Navigation;
