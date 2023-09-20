import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import Dashbord from '../Pages/Dshboard/Dashbord';

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/Home",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/dashboard",
        element: <Dashbord></Dashbord>
      }
    ]
  }
])
export default myCreateRouter;