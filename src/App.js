import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home/Home";
import CategoryPage, {
  loader as categoryLoader,
} from "./pages/Category/Category";
import ProductPage, { loader as productLoader } from "./pages/Product/Product";
import CheckoutPage from "./pages/Checkout/Checkout";
import ErrorPage from "./pages/Error/Error";
import CartProvider from "./store/CartProvider";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "category/:categoryName",
        element: <CategoryPage></CategoryPage>,
        loader: categoryLoader,
      },
      {
        path: "product/:productId",
        element: <ProductPage></ProductPage>,
        loader: productLoader,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
