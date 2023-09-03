import { useState } from "react";

import CartContext from "./cart-context";

const DEFAULT_CART = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const CartProvider = (props) => {
  const [cart, setCart] = useState(getCartFromLocalStorage);

  function getCartFromLocalStorage() {
    let items = [];
    let totalAmount = 0;
    let totalPrice = 0;
    if (localStorage.getItem("items")) {
      items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item) => {
        totalAmount += +item.amount;
        totalPrice += +item.price * +item.amount;
      });
    }
    return { items: items, totalAmount: totalAmount, totalPrice: totalPrice };
  }

  const addItemToCartHandler = (addedItem) => {
    let updatedItems;
    const index = cart.items.findIndex((item) => item.id === addedItem.id);

    if (index === -1) {
      updatedItems = [...cart.items, addedItem];

      setCart((prevCart) => ({
        items: updatedItems,
        totalAmount: prevCart.totalAmount + addedItem.amount,
        totalPrice: prevCart.totalPrice + +addedItem.price * +addedItem.amount,
      }));

      localStorage.setItem("items", JSON.stringify(updatedItems));
    } else {
      const updatedItem = {
        ...cart.items[index],
        amount: cart.items[index].amount + addedItem.amount,
      };
      updatedItems = [...cart.items];
      updatedItems[index] = updatedItem;

      setCart((prevCart) => ({
        items: updatedItems,
        totalAmount: prevCart.totalAmount + addedItem.amount,
        totalPrice: prevCart.totalPrice + +addedItem.price * +addedItem.amount,
      }));

      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const removeItemFromCartHandler = (updatedId) => {
    const index = cart.items.findIndex((item) => item.id === updatedId);
    let updatedItems;

    if (index >= 0) {
      if (cart.items[index].amount === 1) {
        updatedItems = cart.items.filter((item) => item.id !== updatedId);
      } else {
        updatedItems = [...cart.items];
        const updatedItem = {
          ...cart.items[index],
          amount: +cart.items[index].amount - 1,
        };
        updatedItems[index] = updatedItem;
      }

      setCart((prevCart) => ({
        items: updatedItems,
        totalAmount: prevCart.totalAmount - 1,
        totalPrice: prevCart.totalPrice - prevCart.items[index].price,
      }));

      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const changeAmountItemHandler = (itemId, updatedAmount) => {
    const index = cart.items.findIndex((item) => item.id === itemId);

    if (index >= 0) {
      let updatedItems = [...cart.items];
      const updatedItem = { ...cart.items[index], amount: updatedAmount };
      updatedItems[index] = updatedItem;
      setCart((prevCart) => ({
        items: updatedItems,
        totalAmount:
          prevCart.totalAmount - prevCart.items[index].amount + updatedAmount,
        totalPrice:
          prevCart.totalPrice -
          prevCart.items[index].amount * prevCart.items[index].price +
          updatedAmount * prevCart.items[index].price,
      }));

      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const removeAllHandler = () => {
    setCart(DEFAULT_CART);

    localStorage.removeItem("items");
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    totalPrice: cart.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changeAmount: changeAmountItemHandler,
    removeAll: removeAllHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
