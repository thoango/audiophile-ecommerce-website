import Card from "../../components/Card/Card";

import classes from "./Kanban.module.css";

const Kanban = () => {
  const product = {
    productName: "XX99 Mark II HeadphoneS",
    discription:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    new: true,
  };

  return (
    <div className={classes.kanban}>
      <div className={classes["kanban-wrapper-outer"]}>
        <div className={classes["kanban-wrapper"]}>
          <Card
            styleBtn="style01"
            productName={product.productName}
            discription={product.discription}
            new={product.new}
            background="color"
            destination="product/4"
          ></Card>
        </div>
      </div>
    </div>
  );
};
export default Kanban;
