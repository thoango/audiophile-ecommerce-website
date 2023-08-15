import Card from "../../components/Card/Card";

import classes from "./Kanban.module.css";

const Kanban = () => {
  return (
    <div className={classes.kanban}>
      <div className={classes["kanban-wrapper"]}>
        <Card></Card>
      </div>
    </div>
  );
};
export default Kanban;
