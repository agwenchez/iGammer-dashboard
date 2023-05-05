import { FaWallet, FaSlidersH, FaTag, FaChartPie, FaTags } from "react-icons/fa";

import { BiTransferAlt } from "react-icons/bi";

import { AiFillHome } from "react-icons/ai";

import { IoGameController,GrGamepad } from "react-icons/io";
// import { GrGamepad } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { BsCheck2All } from "react-icons/bs";

export const sidebarMenuItems = [
  { title: "Dashboard", icon: AiFillHome, path: "/dashboard" },
  { title: "Games", icon: IoGameController, path: "/dashboard/products" },
  { title: "Approved Game", icon: BsCheck2All, path: "/dashboard/orders" },
  {
    title: "Transactions",
    icon: BiTransferAlt,
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
