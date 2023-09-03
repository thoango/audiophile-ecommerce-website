import { useState } from "react";

import classes from "./CheckoutConfirmInfo.module.css";

const SHIPPING_FEE = 50;

const formatter = new Intl.NumberFormat("en-US");

const CheckoutConfirmInfo = (props) => {
  const [isShowedMore, setIsShowesMore] = useState(false);

  const renderItem = (item, index) => {
    return (
      <div key={index} className={classes["item-wrapper"]}>
        <div className={classes.image}>
          <img
            src={`/assets/cart/image-${item.slug}.jpg`}
            alt={item.name}
          ></img>
        </div>
        <div className={classes.description}>
          <span className={classes["description-name"]}>{item.name}</span>
          <span className={classes["description-price"]}>
            $ {formatter.format(+item.price * +item.amount)}
          </span>
        </div>
        <div className={classes.amount}>
          <span>x{item.amount}</span>
        </div>
      </div>
    );
  };

  let moreItemsContent = "";
  if (props.cart.items.length > 1) {
    moreItemsContent = props.cart.items.map((item, index) => {
      if (index > 0) {
        return renderItem(item, index);
      }
    });
  }

  const loadMoreItemsHandler = () => {
    setIsShowesMore((prevState) => !prevState);
  };

  return (
    <div className={classes["cart-confirm"]}>
      <div className={classes["top-wrapper"]}>
        {renderItem(props.cart.items[0], 0)}
        {isShowedMore && moreItemsContent}
        {props.cart.items.length > 1 && (
          <div className={classes.other} onClick={loadMoreItemsHandler}>
            {isShowedMore && <span>View less</span>}
            {!isShowedMore && (
              <span>and {props.cart.items.length - 1} other item(s)</span>
            )}
          </div>
        )}
      </div>
      <div className={classes["bottom-wrapper"]}>
        <div className={classes["bottom-wrapper-inner"]}>
          <p className={classes["bottom-title"]}>GRAND TOTAL</p>
          <p className={classes["bottom-price"]}>
            $ {formatter.format(+props.cart.totalPrice + SHIPPING_FEE)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmInfo;
