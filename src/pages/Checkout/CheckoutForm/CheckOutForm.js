import { useState, useContext } from "react";

import CheckoutUserInfo from "../CheckoutUserInfo/CheckoutUserInfo";
import CheckoutCart from "../CheckoutCart/CheckoutCart";
import Modal from "../../../UI/Modal/Modal";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CartContext from "../../../store/cart-context";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const cartCtx = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payment: "e-money",
    eNumber: "",
    ePin: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payment: "e-money",
    eNumber: "",
    ePin: "",
  });

  const [isConfirmShowed, setIsConfirmShowed] = useState(false);

  const [cartInfo, setCartInfo] = useState({ items: [], totalPrice: 0 });

  const completeInputHandler = (value) => {
    setFormData((prevState) => ({ ...prevState, ...value }));
  };

  const checkValidation = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required!";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address!";
    }

    if (!formData.phone || !/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number!";
    }

    if (!formData.address) {
      newErrors.address = "Name is required!";
    }

    if (!formData.zipcode || !/^\d{5}$/.test(formData.zipcode)) {
      newErrors.zipcode = "Invalid ZIP code!";
    }

    if (!formData.city) {
      newErrors.city = "Name is required!";
    }

    if (!formData.country) {
      newErrors.country = "Name is required!";
    }

    if (formData.payment === "e-money") {
      if (!formData.eNumber || !/^\d{9}$/.test(formData.eNumber)) {
        newErrors.eNumber = "Invalid e-Money Number!";
      }

      if (!formData.ePin || !/^\d{4}$/.test(formData.ePin)) {
        newErrors.ePin = "Invalid e-Money PIN!";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitFormHandler = () => {
    if (checkValidation()) {
      setIsConfirmShowed(true);
      setCartInfo({ items: cartCtx.items, totalPrice: cartCtx.totalPrice });
      cartCtx.removeAll();
    }
  };

  return (
    <form className={classes.form}>
      <CheckoutUserInfo
        onBlur={completeInputHandler}
        errors={errors}
      ></CheckoutUserInfo>
      <CheckoutCart onClick={submitFormHandler}></CheckoutCart>
      {isConfirmShowed && (
        <Modal className={classes.modal}>
          <CheckoutConfirmation cart={cartInfo}></CheckoutConfirmation>
        </Modal>
      )}
    </form>
  );
};
export default CheckoutForm;
