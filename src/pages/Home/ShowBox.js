import speakerSrcSp from "../../assets/home/mobile/image-speaker-zx9.png";
import speakerSrcTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import earphoneSrcSp from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earphoneSrcTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";

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
          <img className="sp" src={speakerSrcSp} alt="speaker zx9"></img>
          <img
            className="tablet"
            src={speakerSrcTablet}
            alt="speaker zx9"
          ></img>
        </div>
        <div className={classes["showbox-item01-card"]}>
          <Card
            styleBtn="style02"
            productName={product.productName}
            discription={product.discription}
            new={product.new}
            background="color"
            destination="product/6"
          ></Card>
        </div>
      </div>

      <div className={classes["showbox-item02"]}>
        <article className={classes["showbox-item02-content"]}>
          <h4>ZX7 SPEAKER</h4>
          <Button
            className={classes["showbox-item02-button"]}
            destination="product/5"
          >
            see product
          </Button>
        </article>
      </div>

      <div className={classes["showbox-item03"]}>
        <div className={classes["showbox-item03-image"]}>
          <div className={classes["showbox-item03-imageinner"]}>
            <img className="sp" src={earphoneSrcSp} alt="YX1 EARPHONES"></img>
            <img
              className="tablet"
              src={earphoneSrcTablet}
              alt="YX1 EARPHONES"
            ></img>
          </div>
        </div>
        <div className={classes["showbox-item03-wrapper"]}>
          <article className={classes["showbox-item03-content"]}>
            <h4>YX1 EARPHONES</h4>
            <Button
              className={classes["showbox-item03-button"]}
              destination="product/1"
            >
              see product
            </Button>
          </article>
        </div>
      </div>
    </div>
  );
};
export default ShowBox;
