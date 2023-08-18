import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home/Home";
import CategoryPage, {
  loader as categoryLoader,
} from "./pages/Category/Category";
import ErrorPage from "./pages/Error/Error";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "category/headphones",
        element: <CategoryPage></CategoryPage>,
        loader: categoryLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
