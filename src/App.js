import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Categories from './Pages/Categories';

import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductsCategory from './Pages/ProductsCategory';
import AllProducts from './Pages/AllProducts';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import DashBoard from './Pages/DashBoard';
import Orders from './Pages/Orders';


function App() {
  return (
    <div className="App ">
      <NavBar/>
      <Outlet/>
      <Footer />
      </div>
  );
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/categories",
        element: < Categories/>,
      },
      {
        path: "/checkout",
        element: < Checkout/>,
      },
      {
        path: "/orders",
        element: < Orders/>,
      },
      {
        path: "/register",
        element: < Register/>,
      },
      {
        path: "/dashboard",
        element: < DashBoard/>,
      },
      {
        path: "/login",
        element: < Login/>,
      },
      {
        path: "/forgotpassword",
        element: < ForgotPassword/>,
      },
      {
        path: "/categories/:category_name/:category_id",
        element: < ProductsCategory/>,
      },
      {
        path: "/product/:product_name/:product_id",
        element: < ProductDetails/>,
      }
      ,
      {
        path: "/allproducts",
        element: < AllProducts/>,
      }
      
     
    ],
  },
]);

export default App;
