import speakerSrc from "../../assets/home/mobile/image-speaker-zx9.png";
import earphoneSrc from "../../assets/home/mobile/image-earphones-yx1.jpg";

import Card from "../../components/Card/Card";
import Button from "../../UI/Button/Button";

import classes from "./ShowBox.module.css";

const ShowBox = () => {
  const product = {
    productName: "ZX9 SPEAKER",
    discription:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    new: false,
  };

  return (
    <div className={classes.showbox}>
      <div className={classes["showbox-item01"]}>
        <div className={classes["showbox-item01-image"]}>
          <img src={speakerSrc} alt="speaker zx9"></img>
        </div>
        <div className={classes["showbox-item01-card"]}>
          <Card
            styleBtn="style02"
            productName={product.productName}
            discription={product.discription}
            new={product.new}
            background="color"
          ></Card>
        </div>
      </div>

      <div className={classes["showbox-item02"]}>
        <article className={classes["showbox-item02-content"]}>
          <h4>ZX7 SPEAKER</h4>
          <Button className={classes["showbox-item02-button"]}>
            see product
          </Button>
        </article>
      </div>

      <div className={classes["showbox-item03"]}>
        <div className={classes["showbox-item03-image"]}>
          <img src={earphoneSrc} alt="YX1 EARPHONES"></img>
        </div>
        <div className={classes["showbox-item03-wrapper"]}>
          <article className={classes["showbox-item03-content"]}>
            <h4>YX1 EARPHONES</h4>
            <Button className={classes["showbox-item03-button"]}>
              see product
            </Button>
          </article>
        </div>
      </div>
    </div>
  );
};
export default ShowBox;
