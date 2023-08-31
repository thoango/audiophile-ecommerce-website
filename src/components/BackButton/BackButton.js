import { Link } from "react-router-dom";

import classes from "./BackButton.module.css";

const BackButton = () => {
  return (
    <Link to="" className={classes["back-link"]}>
      <span>Go Back</span>
    </Link>
  );
};

export default BackButton;
