import { useRouteError, Link } from "react-router-dom";

import classes from "./Error.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className={classes.error}>
      <p>Something went wrong!</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default ErrorPage;
