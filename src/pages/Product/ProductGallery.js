import classes from "./ProductGallery.module.css";

const ProductGallery = (props) => {
  let content = [];
  if (props.gallery) {
    Object.keys(props.gallery).forEach((key) => {
      const item = props.gallery[key];
      content.push(
        <div key={key} className={classes["gallery-image"]}>
          <img src={`.${item.mobile}`}></img>
        </div>
      );
    });
  }

  return <div className={classes.gallery}>{content}</div>;
};
export default ProductGallery;
