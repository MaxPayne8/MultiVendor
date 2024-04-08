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
import OrderSuccessfull from './Pages/OrderSuccessfull';
import OrderFailed from './Pages/OrderFailed';
import Address from './Pages/Address';
import AddAddress from './Pages/AddAddress';
import SellerRegister from './Pages/SellerRegister';
import SellerLogin from './Pages/SellerLogin';
import DashboardSeller from './Pages/DashboardSeller';

import Customers from './Pages/Customers';
import SellerProducts from './Pages/SellerProducts';
import SellerAddProduct from './Pages/SellerAddProduct';
import SellerOrders from './Pages/SellerOrders';
import Reports from './Pages/Reports';
import SellerProfile from './Pages/SellerProfile';
import SellerChangePassword from './Pages/SellerChangePassword';
import ProductTag from './Pages/TagProducts';


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
        path: "/categories/:id",
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
        path: "/all-address",
        element: < Address/>,
      },
      {
        path: "/add-address",
        element: < AddAddress/>,
      },
      {
        path: "/order-placed",
        element: < OrderSuccessfull/>,
      },
      {
        path: "/order-failed",
        element: < OrderFailed/>,
      },
      {
        path: "/dashboard",
        element: < DashBoard/>,
      },
      {
        path: "/dashboard-seller",
        element: < DashboardSeller/>,
      },
      {
        path: "/login",
        element: < Login/>,
      },
      {
        path: "/seller-login",
        element: < SellerLogin/>,
      },
      {
        path: "/seller-register",
        element: < SellerRegister/>,
      },
      {
        path: "/seller-products",
        element: < SellerProducts/>,
      },
      {
        path: "/seller-add-product",
        element: < SellerAddProduct/>,
      },
      {
        path: "/forgotpassword",
        element: < ForgotPassword/>,
      },
      {
        path: "/categories/:category_name/:category_id/page/:id",
        element: < ProductsCategory/>,
      },
      {
        path: "/product/:product_name/:product_id",
        element: < ProductDetails/>,
      }
      ,
      {
        path: "/product/:tag/page/:page_num",
        element: < ProductTag/>,
      }
      ,
      {
        path: "/products/page/:id",
        element: < AllProducts/>,
      }
      ,
      {
        path: "/customers",
        element: < Customers/>,
      }
      ,
      {
        path: "/reports",
        element: < Reports/>,
      }
      ,
      {
        path: "/seller-orders",
        element: < SellerOrders/>,
      }
      ,
      {
        path: "/seller-profile",
        element: < SellerProfile/>,
      }
      ,
      {
        path: "/seller-change-password",
        element: < SellerChangePassword/>,
      }
      
     
    ],
  },
]);

export default App;
