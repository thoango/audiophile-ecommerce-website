import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../layout/Header/Header";
import Message from "../layout/Message/Message";
import Footer from "../layout/Footer/Footer";

const RootLayout = () => {
  const { data } = useLoaderData();
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

export async function loader() {
  const response = await fetch(
    "https://audiophile-ecommerce-web-847e5-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  return { data };
}
