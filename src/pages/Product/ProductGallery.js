import classes from "./ProductGallery.module.css";

const ProductGallery = (props) => {
  let content = [];
  if (props.gallery) {
    Object.keys(props.gallery).forEach((key) => {
      const item = props.gallery[key];
      content.push(
        <div key={key} className={classes["gallery-image"]}>
          <div className={classes["gallery-image-inner"]}>
            <img className="sp" src={`.${item.mobile}`}></img>
            <img className="tablet" src={`.${item.tablet}`}></img>
          </div>
        </div>
      );
    });
  }

  return <div className={classes.gallery}>{content}</div>;
};
export default ProductGallery;
