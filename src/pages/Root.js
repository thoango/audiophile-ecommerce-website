import { Outlet, useParams } from "react-router-dom";
import Header from "../layout/Header/Header";
import Message from "../layout/Message/Message";
import Footer from "../layout/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";

const RootLayout = () => {
  const params = useParams();
  const page = params.categoryName || params.productId;

  return (
    <ScrollToTop>
      <Header page={page}></Header>
      <main>
        <Outlet></Outlet>
        <Message></Message>
      </main>
      <Footer></Footer>
    </ScrollToTop>
  );
};
export default RootLayout;
