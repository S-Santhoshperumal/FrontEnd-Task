import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainDashBoardComp from "../Components/MainDashBoardComp";
import AboutComp from "../Components/AboutComp";
import ContactsComp from "../Components/ContactsComp";
import ProductsComp from "../Components/ProductsComp";



const Routing=createBrowserRouter([
    {path:"/",element:<MainDashBoardComp/>},
    {path:"about",element:<AboutComp/>},
    {path:"contacts",element:<ContactsComp/>},
    {path:"products",element:<ProductsComp/>}
])

export default Routing;