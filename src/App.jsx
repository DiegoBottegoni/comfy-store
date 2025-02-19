import { ToastContainer, toast } from "react-toastify";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components";

//loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        theme="dark"
      />
    </>
  );
};

export default App;
