import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import ProductGallery from "./ProductGallery";
import ProductOthers from "./ProductOthers";
import Menu from "../../layout/Menu/Menu";
import BackButton from "../../components/BackButton/BackButton";

import classes from "./Product.module.css";

const ProductPage = (props) => {
  const [product, setProduct] = useState(null);
  const { data } = useLoaderData();
  const params = useParams();

  useEffect(() => {
    const getProduct = (productId) => {
      if (data) {
        return data.find((item) => item.id === +productId);
      }
    };

    setProduct(getProduct(params.productId));
  }, [data, params.productId]);

  return (
    <div className={classes.product}>
      {product && (
        <>
          <BackButton></BackButton>
          <div className={classes["product-card-wrapper"]}>
            <div className={classes["product-image"]}>
              <img
                className="sp"
                src={`.${product.image.mobile}`}
                alt={props.name}
              ></img>
              <img
                className="tablet"
                src={`.${product.image.tablet}`}
                alt={props.name}
              ></img>
            </div>
            <ProductCard
              id={product.id}
              new={product.new}
              name={product.name}
              description={product.description}
              price={product.price}
              slug={product.slug}
            ></ProductCard>
          </div>
          <div className={classes.info}>
            <h2 className={classes["info-title"]}>FEATURES</h2>
            <p className={classes["info-paragraph"]}>{product.features}</p>
          </div>
          <div className={`${classes.info} ${classes["inbox"]}`}>
            <h2 className={classes["info-title"]}>IN THE BOX</h2>
            <div className={classes["info-list"]}>
              {product.includes.map((item, index) => (
                <div key={index} className={classes["info-paragraph-wrap"]}>
                  <span className={classes["info-quantity"]}>
                    {item.quantity}x
                  </span>
                  <span className={classes["info-paragraph"]}>{item.item}</span>
                </div>
              ))}
            </div>
          </div>
          <ProductGallery gallery={product.gallery}></ProductGallery>
          <ProductOthers others={product.others}></ProductOthers>
          <div className={classes.menu}>
            <Menu></Menu>
          </div>
        </>
      )}
      {!product && (
        <div className={classes.notFound}>
          <p>Not found product!</p>
          <Link to="">Go Home</Link>
        </div>
      )}
    </div>
  );
};
export default ProductPage;

export async function loader() {
  const response = await fetch(
    "https://audiophile-ecommerce-web-847e5-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  return { data };
}
