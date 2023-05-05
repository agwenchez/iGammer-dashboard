// import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./breadcrumb.module.scss";

type BreadCrumbProps = {
  title: string;
};

const index = ({ title }: BreadCrumbProps) => {
  const navigate = useNavigate()
  return (
    <div className={styles.breadcrumb_container}>
      <h2>{title}</h2>
    </div>
  );
};

export default index;
