import { FaWallet, FaSlidersH, FaTag, FaChartPie, FaTags } from "react-icons/fa";

import { TiThListOutline } from "react-icons/ti";

import { AiFillHome } from "react-icons/ai";

import { GrTransaction,GrGamepad } from "react-icons/gr";
// import { GrGamepad } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { BsCheck2All } from "react-icons/bs\";

export const sidebarMenuItems = [
  { title: "Dashboard", icon: AiFillHome, path: "/dashboard" },
  { title: "Games", icon: GrGamepad, path: "/dashboard/products" },
  { title: "Approved Game", icon: BsCheck2All, path: "/dashboard/orders" },
  {
    title: "Transactions",
    icon: GrTransaction,
    path: "/dashboard/transactions",
    gap: true,
  },
  {
    title: "Users",
    icon: HiUsers,
    path: "/dashboard/customers",
    gap: true,
  },
  // { title: "Tags", icon: FaTags, path: "/dashboard/offers" },
  // { title: "Categories", icon: TiThListOutline, path: "/dashboard/offers" },
  // { title: "Hot Offers", icon: FaTag, path: "/dashboard/offers" },
  // { title: "Statistics", icon: FaChartPie, path: "/dashboard/statistics" },
  // { title: "Settings", icon: FiSettings, path: "" },
];
