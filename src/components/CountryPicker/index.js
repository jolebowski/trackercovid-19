import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import cx from "classnames";

const CountryPicker = ({ handleCountryChange, addClass }) => {
  const [fetchedCountries, setFetechedCountries] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setFetechedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetechedCountries]);

  return (
    <div className={styles.tabCountry}>
      <div className={styles.info}>
        <div className={styles.areas}>
          {/*<div className={styles.searchCountrie}>
            <input
              type="text"
              placeholder="Entrer le nom du pays"
              autocapitalize="off"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        */}
          {fetchedCountries &&
            fetchedCountries.map((country, index) => (
              <div id={country} className={styles.divArea}>
                <div
                  className={cx(
                    styles.country,
                    addClass === index && styles.active
                  )}
                  key={index}
                  onClick={(e) =>
                    handleCountryChange(e.currentTarget.dataset.country, index)
                  }
                  data-country={country}
                >
                  {country}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
