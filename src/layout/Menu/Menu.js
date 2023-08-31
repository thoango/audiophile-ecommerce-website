import MenuItem from "./MenuItem";

import headphoneImage from "../../assets/menu-xx99-mark-one-headphones.png";
import speakerImage from "../../assets/menu-zx9-speaker.png";
import earphoneImage from "../../assets/menu-yx1-earphones.png";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <div className="wrap">
        <ul className={classes.menuList}>
          <MenuItem
            imageSrc={headphoneImage}
            name="headphones"
            destination="/category/headphones"
            onClick={props.onClose}
          ></MenuItem>
          <MenuItem
            imageSrc={speakerImage}
            name="speakers"
            destination="/category/speakers"
            onClick={props.onClose}
          ></MenuItem>
          <MenuItem
            imageSrc={earphoneImage}
            name="earphones"
            destination="/category/earphones"
            onClick={props.onClose}
          ></MenuItem>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
