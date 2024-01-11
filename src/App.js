import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Restaurentmenu from "./components/Restaurentmenu";
/**
 * Header
 *  - Logo
 * - Nav Links
 * Body
 * -Search
 * -RestorentContainer
 *  - RestorentCard
 *     -img
 *     -Name of res ,Star, Rating, quisine tie
 * Footer
 * - cpyright
 * -Lnks
 * -Address
 * - contact
 *  chunking
 * code spiliting 
 * dynamic boundling
 * Lazy loading
 * ondemand loading
 * 
 * 
 */
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))

const AppLayout = () => {
 
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback= {<h1>Loading....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback= {<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurent/:resId",
        element: <Restaurentmenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
