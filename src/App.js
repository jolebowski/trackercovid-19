import React, { Component } from "react";
import { Cards, Chart, CountryPicker, Infos , Select} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from './images/image.png';



class App extends Component {
  state = {
    data: {},
    country: "",
    statStatic: "",
    addClass: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData, statStatic: fetchedData });
  }

  handleCountryChange = async (country, index) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country, addClass: index });
  };

  render() {
    const { data, country, statStatic, addClass } = this.state;
    return (
      <div className={styles.pageWhole}>
        <div className={styles.header}>
          <a href="/" >
          <img className={styles.logo} src={image} alt="COVID-19" />
          </a>  
          <a href="/" className={styles.titleHeader}>
            <h1 className={styles.namePage}>
              Statistiques sur le coronavirus (COVID-19)
            </h1>
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.listCountry}>
            <Infos data={statStatic} />
            <CountryPicker
              data={statStatic}
              handleCountryChange={this.handleCountryChange}
              addClass={addClass}
            />
          </div>
          <div className={styles.vertical}>
            <div className={styles.verticalHeader}>
              <div className={styles.location}>
                <h2 className={styles.locationTitle}>
                  {country ? country : "Monde entier"}
                </h2>
              </div>
            </div>
            <div className={styles.verticalContent}>
              <div className={styles.graph}>
                <div className={styles.row} id={styles.mobile}>
                  <Select handleCountryChange={this.handleCountryChange}/>
                </div>
                <div className={styles.row}>
                  <Cards data={data} />
                </div>
                <div className={styles.row}>
                  <Chart data={data} statStatic={statStatic}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
