import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout, { loader as rootLoader } from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error/Error";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    children: [{ index: true, element: <HomePage></HomePage> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
