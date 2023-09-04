import { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

import CategoryList from "./CategoryList";
import Menu from "../../layout/Menu/Menu";

import classes from "./Category.module.css";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { data } = useLoaderData();
  const params = useParams();

  useEffect(() => {
    const getProducts = (categoryName) => {
      if (data) {
        return data.filter((item) => item.category === categoryName);
      }
    };

    setProducts(getProducts(params.categoryName));
  }, [params.categoryName, data]);

  return (
    <div className={classes.category}>
      {products.length > 0 && (
        <>
          <CategoryList products={products}></CategoryList>
          <Menu></Menu>
        </>
      )}
      {products.length === 0 && (
        <div className={classes.notFound}>
          <p>Not found category!</p>
          <Link to="/">Go Home</Link>
        </div>
      )}
    </div>
  );
};
export default CategoryPage;

export async function loader() {
  const response = await fetch(
    "https://audiophile-ecommerce-web-847e5-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  return { data };
}
