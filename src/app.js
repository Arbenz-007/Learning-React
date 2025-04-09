import React, {lazy, Suspense} from "react";
import * as ReactDOM from "react-dom/client";
//import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {useState,useEffect} from "react";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import Grocery from './components/Grocery';


//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//On demand loading
//Dynamic import

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {


  const [userName, setUserName]= useState();


  //authentication

  useEffect(()=>{
    //make an API call and send username and password

    const data ={
      name: "Rayan",
    };

    setUserName(data.name);
  },[]);

  const location = useLocation();

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      {location.pathname !== "/" && <Header />}
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
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
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/home",
        element: <Body />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
