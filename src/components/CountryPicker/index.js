import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import cx from "classnames";

const CountryPicker = ({ handleCountryChange, addClass }) => {
  const [fetchedCountries, setFetechedCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setFetechedCountries(await fetchCountries());
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      fetchedCountries &&
      Object.values(fetchedCountries).filter((country) => {
      return country &&
        country.toLowerCase().includes(search && search.toLowerCase());
    })
    )
  }, [search, fetchedCountries])

  return (
    <div className={styles.tabCountry}>
      <div className={styles.info}>
        <div className={styles.areas}>
          <div className={styles.searchCountrie}>
            <input
              type="text"
              placeholder="Entrez le nom d'un pays"
              autocapitalize="off"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {filteredCountries &&
            filteredCountries.map((country, index) => (
              <div id={country} className={styles.divArea}>
                {console.log(search,'searchsearch')}
                {console.log(addClass,'addClassaddClass')}

                <div
                  className={cx(
                    styles.country,
                    addClass === index && styles.active,
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
