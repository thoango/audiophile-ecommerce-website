import { Outlet } from "react-router-dom";
import Header from "../layout/Header/Header";
import Message from "../layout/Message/Message";
import Footer from "../layout/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
        <Message></Message>
      </main>
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
