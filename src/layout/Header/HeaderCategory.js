import classes from "./HeaderCategory.module.css";

const HeaderCategory = (props) => {
  return (
    <div className={classes.headerCategory}>
      <h2 className={classes.title}>{props.title}</h2>
    </div>
  );
};
export default HeaderCategory;
