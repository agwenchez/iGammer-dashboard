import {
  FaWallet,
  FaSlidersH,
  FaTag,
  FaChartPie,
  FaTags,
} from "react-icons/fa";

import { TiThListOutline } from "react-icons/ti";

import { AiFillHome } from "react-icons/ai";

import { GrTransaction, GrGamepad } from "react-icons/gr";
// import { GrGamepad } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";

export const sidebarMenuItems = [
  { title: "Dashboard", icon: AiFillHome,color: "#ffff", path: "/dashboard" },
  { title: "Games", icon: GrGamepad,color: "#ffff", path: "/dashboard/products" },
  { title: "Approved Game", icon: FcApproval,color: "#ffff", path: "/dashboard/orders" },
  {
    title: "Transactions",
    icon: GrTransaction,
    path: "/dashboard/transactions",
    gap: true,
    color: "#ffff"
  },
  {
    title: "Users",
    icon: HiUsers,
    color: "#ffff",
    path: "/dashboard/customers",
    gap: true,
  },
  // { title: "Tags", icon: FaTags, path: "/dashboard/offers" },
  // { title: "Categories", icon: TiThListOutline, path: "/dashboard/offers" },
  // { title: "Hot Offers", icon: FaTag, path: "/dashboard/offers" },
  // { title: "Statistics", icon: FaChartPie, path: "/dashboard/statistics" },
  // { title: "Settings", icon: FiSettings, path: "" },
];
