import { Link } from "react-router-dom";
import classes from "./NoItems.module.css";

const NoItems = () => {
  return (
    <div className={classes.noitems}>
      <p>No Items Found!</p>
    </div>
  );
};

export default NoItems;
