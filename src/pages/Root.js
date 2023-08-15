import { Outlet } from "react-router-dom";
import Header from "../layout/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default RootLayout;
