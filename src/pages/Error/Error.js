import { useRouteError } from "react-router-dom";

import classes from "./Error.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
