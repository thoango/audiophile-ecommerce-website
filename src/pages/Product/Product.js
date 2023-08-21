import { Link, useLoaderData } from "react-router-dom";

import ProductCard from "./ProductCard";
import ProductGallery from "./ProductGallery";
import ProductOthers from "./ProductOthers";
import Menu from "../../layout/Menu/Menu";

import classes from "./Product.module.css";

const ProductPage = (props) => {
  const { product } = useLoaderData();

  return (
    <div className={classes.product}>
      <Link to="" className={classes["back-link"]}>
        <span>Go Back</span>
      </Link>
      <div className={classes["product-card-wrapper"]}>
        <div className={classes["product-image"]}>
          <img src={`.${product.image.mobile}`}></img>
        </div>
        <ProductCard
          new={product.new}
          name={product.name}
          description={product.description}
          price={product.price}
        ></ProductCard>
      </div>
      <div className={classes.info}>
        <h2 className={classes["info-title"]}>FEATURES</h2>
        <p className={classes["info-paragraph"]}>{product.features}</p>
      </div>
      <div className={classes.info}>
        <h2 className={classes["info-title"]}>IN THE BOX</h2>
        {product.includes.map((item, index) => (
          <div key={index} className={classes["info-paragraph-wrap"]}>
            <span className={classes["info-quantity"]}>{item.quantity}x</span>
            <span className={classes["info-paragraph"]}>{item.item}</span>
          </div>
        ))}
      </div>
      <ProductGallery gallery={product.gallery}></ProductGallery>
      <ProductOthers others={product.others}></ProductOthers>
      <div className={classes.menu}>
        <Menu></Menu>
      </div>
    </div>
  );
};
export default ProductPage;

export async function loader() {
  const response = await fetch(
    "https://audiophile-ecommerce-web-847e5-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  const product = data.find((item) => item.id === 4);
  return { product };
}
