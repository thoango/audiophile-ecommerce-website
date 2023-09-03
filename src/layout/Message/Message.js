import imageSrcSp from "../../assets/shared/mobile/image-best-gear.jpg";
import imageSrcTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import imageSrcPc from "../../assets/shared/desktop/image-best-gear.jpg";

import classes from "./Message.module.css";

const Message = () => {
  return (
    <div className={classes.message}>
      <div className={classes["message-image"]}>
        <img className="sp" src={imageSrcSp} alt="best gear image"></img>
        <img
          className="tablet"
          src={imageSrcTablet}
          alt="best gear image"
        ></img>
        <img className="pc" src={imageSrcPc} alt="best gear image"></img>
      </div>
      <div className={classes["message-textbox"]}>
        <h4 className={classes["message-title"]}>
          Bringing you the <span>best</span> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
export default Message;
