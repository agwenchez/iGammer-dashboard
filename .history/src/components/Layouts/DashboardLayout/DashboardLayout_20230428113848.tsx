import { useState } from "react";
import styles from "./dashboardlayout.module.scss";
import {
  FaBell,
  FaChevronDown,
  FaUserTie,
  FaChevronLeft,
} from "react-icons/fa";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

// type SidebarProps = {
//   children: React.ReactNode;
// };
const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main className={styles.sidebar_wrapper_container}>
        <section
          className={`${
            open ? styles.sidebar_container : styles.sidebar_container_close
          }`}
        >
          {/* <FiHo/> */}
          {!open ? (
            <>
              <RiDashboardFill
                className={styles.icon}
                onClick={() => setOpen(true)}
              />
            </>
          ) : (
            <>
              <FaChevronLeft
                className={styles.icon}
                style={{ right: ".6em" }}
                onClick={() => setOpen(false)}
              />
            </>
          )}
          <div className={styles.sidebar_logo_container}>
            <p
              style={
                open ? { transform: "scale(1)" } : { transform: "scale(0)" }
              }
            >
              CELEBRITY BRANDS
            </p>
          </div>
          <ul className={styles.menu}>
            {sidebarMenuItems.map((menu, indx) => (
              <Link to={menu.path} key={indx} className={styles.menu_item}>
                <menu.icon className={styles.menu_icon} />
                <span hidden={open ? false : true}> {menu.title}</span>
              </Link>
            ))}
            {/* <div className={styles.logout_container}>
              <MdLogout className={styles.logout_icon} />
              <h3 hidden={open ? false : true}>Logout</h3>
            </div> */}
          </ul>
        </section>
        <section className={styles.main_content_container}>
          <div className={styles.nav_container}>
            <div className={styles.searchbar}>
              {/* <input type="text" name="search" id="search" placeholder="Search here..." /> */}
            </div>
            {/* Do someting here*/}
            <nav className={styles.header_right_container}>
              <div className={styles.notification_icon_container}>
                <span>2</span>
                <FaBell size={"1.7em"} className={styles.notification_icon} />
              </div>
              <div className={styles.header_icon}>
                <FaUserTie className={styles.user_icon} />
                <FaChevronDown
                  color="gray"
                  className={styles.chevron_down}
                  style={{ justifySelf: "center" }}
                />
                <GiHamburgerMenu
                  className={styles.mobile_menu}
                  onClick={() => setOpen((prev) => !prev)}
                />
              </div>
            </nav>
          </div>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
