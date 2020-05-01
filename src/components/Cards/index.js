import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Chargement...";
  }
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col3}>
          <div className={cx(styles.card, styles.confirmed)}>
            <div className={styles.tile}>
              <div className={styles.title}>
                Nombre total de cas confirmés :
                <div className={styles.numberConfirmed}>
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={cx(styles.card, styles.recovered)}>
            <div className={styles.tile}>
              <div className={styles.title}>
                Nombre de guérisons :
                <div className={styles.numberRecovered}>
                  <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={cx(styles.deaths, styles.card)}>
            <div className={styles.tile}>
              <div className={styles.title}>
                Nombre de décès :
                <div className={styles.numberDeaths}>
                  <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
