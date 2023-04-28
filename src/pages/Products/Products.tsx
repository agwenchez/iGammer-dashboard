import React from "react";
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
import styles from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={styles.products_container}>
        <BreadCrumb title={"Products"} addNew={true} navigateTo={'/dashboard/products/add_new'} />
        <div className={styles.products_table}>
            <DataTable />
        </div>
      </div>
    </>
  );
};

export default Products;
