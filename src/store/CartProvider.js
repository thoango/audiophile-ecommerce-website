import { useState } from "react";

import CartContext from "./cart-context";

const DEFAULT_CART = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const CartProvider = (props) => {
  const [cart, setCart] = useState(DEFAULT_CART);

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
    }
  };

  const removeAllHandler = () => {
    setCart(DEFAULT_CART);
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
