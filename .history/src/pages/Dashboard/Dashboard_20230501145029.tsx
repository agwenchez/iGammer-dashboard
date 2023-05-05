import React from "react";
import styles from "./dashboard.module.scss";
import { cardsData } from "./Card/cardsData";
import Card from "./Card/Card";
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable";
import Chart from "react-apexcharts";
import { apexMixedCharts, areaSpaline, Currentlysale, demographicPieChartsData, Monthlysales, polarChartData, salesBarChartData } from "./chartsData";
import { ApexOptions } from "apexcharts";

const Dashboard = () => {
  return (
    <>
      <main className={styles.dashboard_container}>
        <BreadCrumb title={"Dashboard"} addNew={false} navigateTo={""} />
        <section className={styles.cards_container}>
          {cardsData.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              metrics={card.metrics}
              icon={card.icon}
            />
          ))}
        </section>
        <section className={styles.body_container}>
        <div className={styles.container_wrapper}>
            <div className={styles.left_container}>
              <div className={styles.revenue_chart}>
                <h4>Gamers Distribution</h4>
                <Chart
                  options={salesBarChartData.options as ApexOptions}
                  series={salesBarChartData.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
            {/* <div style={{ flex: 2.1}}>
                <DataTable/>
            </div> */}
            <div className={styles.right_container}>
              <div className={styles.visits_stats}>
                <h4>Games by category </h4>
                {/* Either easy or hard */}
                <Chart
                  options={demographicPieChartsData.options as ApexOptions}
                  series={demographicPieChartsData.series}
                  type="donut"
                  height={350}
                />
              </div>
            </div>
          </div>
          <div className={styles.container_wrapper}>
            <div className={styles.right_container}>
              <div className={styles.visits_stats}>
                <h4>Demographic Distribution</h4>
                <Chart
                  options={polarChartData.options as ApexOptions}
                  series={polarChartData.series}
                  type="polarArea"
                  height={350}
                />
              </div>
            </div>
            <div className={styles.left_container}>
              <div className={styles.revenue_chart}>
                <h4>Orders overview</h4>
               
              </div>
            </div>
          </div>
     
        </section>
      </main>
    </>
  );
};

export default Dashboard;
