import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPi();
  }, [setDailyData]);

  const LineChart =
    dailyData.length !== undefined ? (
      <Line
      height={254}
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Contaminés",
              borderColor: "#de3700",
              backgroundColor: "#de3700",
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Morts",
              backgroundColor: "#767676",
              borderColor: "#767676",
            },
          ],
        }}
      />
    ) : null;
  return (
    <div className={styles.row}>
      <div className={styles.col6}>
        <div className={styles.test}>{LineChart}</div>
      </div>
    </div>
  );
};

export default Chart;
