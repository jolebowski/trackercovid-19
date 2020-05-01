import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.pageWhole}>
        <div className={styles.header}>
          <a href="/" className={styles.titleHeader}>
            <h1 className={styles.namePage}>
              Statistiques sur le coronavirus (COVID-19)
            </h1>
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.listCountry}>
            <CountryPicker />
          </div>
          <div className={styles.vertical}>
            <Cards data={data} />
          </div>
        </div>
        <Chart />
      </div>
    );
  }
}
export default App;
