import React from "react";
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
import styles from "./orders.module.scss";

const Orders = () => {
  return (
    <>
      <div className={styles.orders_container}>
        <BreadCrumb title={"Approved Games"}/>
        <div className={styles.orders_table}>
            <DataTable />
        </div>
      </div>
    </>
  );
};

export default Orders;
