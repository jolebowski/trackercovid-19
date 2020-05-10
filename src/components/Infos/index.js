import React from "react";
import styles from "./Infos.module.css";

const Infos = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Chargement...";
  }
  return (
    <div className={styles.info}>
      <div className={styles.infoHeader}>
        <div>
          <h2 className={styles.infotitle}>
            Nombre total de cas confirmés dans le monde entier:
          </h2>
        </div>
        <div className={styles.confirmed}>
          {confirmed &&
            confirmed.value.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      <div className={styles.infoData}>
        <h2 className={styles.infoLegend}>
          <div className={styles.color}></div>
          <div className={styles.description}>Nombre de guérisons :</div>
          <div className={styles.total}>
            {recovered &&
              recovered.value
                .toString()
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")}
          </div>
        </h2>
        <h2 className={styles.infoLegend}>
          <div className={styles.colorDeaths}></div>
          <div className={styles.description}>Nombre de décès :</div>
          <div className={styles.total}>
            {deaths &&
              deaths.value.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")}
          </div>
        </h2>
      </div>
      <div className={styles.lastUpdate}>
        Dernière mise à jour le :{" "}
        {new Date(lastUpdate).toLocaleDateString("fr-FR")}
      </div>
    </div>
  );
};
export default Infos;
