import { Outlet, useParams } from "react-router-dom";
import Header from "../layout/Header/Header";
import Message from "../layout/Message/Message";
import Footer from "../layout/Footer/Footer";

const RootLayout = () => {
  const params = useParams();
  const page = params.categoryName || params.productId;
  console.log(page);

  return (
    <>
      <Header page={page}></Header>
      <main>
        <Outlet></Outlet>
        <Message></Message>
      </main>
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
