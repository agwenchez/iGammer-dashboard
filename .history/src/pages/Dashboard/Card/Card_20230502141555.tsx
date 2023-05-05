import React from "react";
import styles from "./card.module.scss";
// import { CardInterface } from "../../../@types";
type CardProps = {
  title: string;
  metrics: string;
  icon: JSX.Element;
};

const Card = ({icon, title,metrics}: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_icon}>{icon}</div>
        <div className={styles.card_content}>
          <p>{title}</p>
          <p>{metrics}</p>
          hello
        </div>
      </div>
    </>
  );
};

export default Card;
