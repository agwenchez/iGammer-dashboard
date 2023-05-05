import React from "react";
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
import styles from "./customers.module.scss";

const Customers = () => {
  return (
    <>
      <div className={styles.customers_container}>
        <BreadCrumb title={"Customers"} addNew={true} navigateTo={'/dashboard/customers/customer/add_new'}/>
        <div className={styles.customers_table}>
            <DataTable />
        </div>
      </div>
    </>
  );
};

export default Customers;
