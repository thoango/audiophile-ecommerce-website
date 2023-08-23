import { Outlet, useParams } from "react-router-dom";
import Header from "../layout/Header/Header";
import Message from "../layout/Message/Message";
import Footer from "../layout/Footer/Footer";
import CartProvider from "../store/CartProvider";

const RootLayout = () => {
  const params = useParams();
  const page = params.categoryName || params.productId;

  return (
    <CartProvider>
      <Header page={page}></Header>
      <main>
        <Outlet></Outlet>
        <Message></Message>
      </main>
      <Footer></Footer>
    </CartProvider>
  );
};
export default RootLayout;
