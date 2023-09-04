import { Link, useNavigate } from "react-router-dom";

import classes from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className={classes["back-link"]}>
      <span>Go Back</span>
    </button>
  );
};

export default BackButton;
