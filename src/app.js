import React, {lazy, Suspense} from "react";
import * as ReactDOM from "react-dom/client";
//import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import Grocery from './components/Grocery';


//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//On demand loading
//Dynamic import

const Grocery = lazy(()=>import("./components/Grocery"));

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
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
