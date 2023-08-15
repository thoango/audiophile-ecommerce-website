import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [{ index: true, element: <HomePage></HomePage> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
