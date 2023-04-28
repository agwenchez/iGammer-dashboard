import React from "react";
import { Product } from "../../@types";
import styles from "./datatable.module.scss";
import MuiDataTable from "./MuiTable";
import * as tableDataConfig from "../../pages/Products/productsData";

const { productsData } = tableDataConfig;
const { tableHeader, tableBody } = productsData;

const index = () => {
  return (
    <>
    <div className={styles.datatable}>

{/* TODO */}
    <MuiDataTable/>
    </div>
    </>
  );
};

export default index;
