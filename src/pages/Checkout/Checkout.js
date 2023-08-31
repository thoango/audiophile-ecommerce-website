import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import BackButton from "../../components/BackButton/BackButton";
import CheckoutForm from "./CheckoutForm/CheckOutForm";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

import classes from "./Checkout.module.css";

const CheckoutPage = () => {
  return (
    <ScrollToTop>
      <Header page="checkout"></Header>
      <main className={classes.main}>
        <BackButton></BackButton>
        <CheckoutForm></CheckoutForm>
      </main>
      <Footer></Footer>
    </ScrollToTop>
  );
};
export default CheckoutPage;
