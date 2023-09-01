import CategoryItem from "./CategoryItem";

import classes from "./CategoryList.module.css";

const CategoryList = (props) => {
  return (
    <ul className={classes.list}>
      {props.products
        .filter((item) => item.new)
        .map((item) => (
          <CategoryItem
            key={item.id}
            id={item.id}
            categoryImage={item.categoryImage}
            new={item.new}
            name={item.name}
            description={item.description}
          ></CategoryItem>
        ))}
      {props.products
        .filter((item) => !item.new)
        .map((item) => (
          <CategoryItem
            key={item.id}
            id={item.id}
            categoryImage={item.categoryImage}
            new={item.new}
            name={item.name}
            description={item.description}
          ></CategoryItem>
        ))}
    </ul>
  );
};
export default CategoryList;
