import { Outlet } from "react-router-dom";
import styles from "./authlayout.module.scss";
const AuthLayout = () => {
    return (
      <>
        <div className={styles.auth_container}>
          <div className={styles.left_container}>
            {/* <div className={styles.bg_color}></div> */}
            <img src="/assets/images/game.png" alt="" />
            <p>Let</p>
          </div>
          <div className={styles.right_container}>
            <Outlet/>
          </div>
        </div>
      </>
    );
  };
  
  export default AuthLayout;