import { FaWallet, FaSlidersH, FaTag, FaChartPie, FaTags } from "react-icons/fa";

import { TiThListOutline } from "react-icons/ti";

import { AiFillHome } from "react-icons/ai";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export const sidebarMenuItems = [
  { title: "Dashboard", icon: AiFillHome, path: "/dashboard" },
  { title: "Products", icon: RiShoppingBag3Fill, path: "/dashboard/products" },
  { title: "Orders", icon: MdShoppingCart, path: "/dashboard/orders" },
  {
    title: "Transactions",
    icon: FaWallet,
    path: "/dashboard/transactions",
    gap: true,
  },
  {
    title: "Customers",
    icon: HiUsers,
    path: "/dashboard/customers",
    gap: true,
  },
  { title: "Tags", icon: FaTags, path: "/dashboard/offers" },
  { title: "Categories", icon: TiThListOutline, path: "/dashboard/offers" },
  { title: "Hot Offers", icon: FaTag, path: "/dashboard/offers" },
  { title: "Statistics", icon: FaChartPie, path: "/dashboard/statistics" },
  // { title: "Settings", icon: FiSettings, path: "" },
];
