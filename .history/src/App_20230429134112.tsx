import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout/AuthLayout";
import Login from "./components/Auth/Login/Login";
import Customers from "./pages/Customers/Customers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Offers from "./pages/Hot Offers/Offers";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Statistics from "./pages/Statistics/Statistics";
import Transactions from "./pages/Transactions/Transactions";
import RootErrorBoundary from "./pages/error-page";
import NewProduct from "./pages/Products/New Product/NewProduct";
import PrivateOutlet from "./utils/PrivateOutlet";
import DashboardLayout from "./components/Layouts/DashboardLayout/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public routes */}
      <Route path="/" element={<AuthLayout />} errorElement={<RootErrorBoundary/>}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      
      {/* Protected routes */}
      <Route element={<PrivateOutlet />}>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="product/add_new" element={<NewProduct />} />
        </Route>
        <Route path="orders" element={<Orders />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="offers" element={<Offers />} />
        <Route path="customers" element={<Customers />} >
          <Route path="customer/add_new" element={<Customers />} />
        </Route>
      </Route>
        
      </Route>
    </Route>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
