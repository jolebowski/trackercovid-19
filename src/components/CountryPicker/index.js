import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountries, fetchTotal } from "../../api";
import cx from "classnames";

const CountryPicker = ({
  handleCountryChange,
  addClass,
  data: { confirmed },
}) => {
  const [fetchedCountries, setFetechedCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTotal(await fetchTotal());
    };
    fetchApi();
  }, [total]);

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
          return (
            country &&
            country.toLowerCase().includes(search && search.toLowerCase())
          );
        })
    );
  }, [search, fetchedCountries]);

  return (
    <div className={styles.tabCountry}>
      <div className={styles.areas}>
        <div className={styles.searchCountrie}>
          <input
            type="text"
            placeholder="Entrez le nom d'un pays"
            autocapitalize="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.countrieContent}>
            {search !== "" &&
              filteredCountries &&
              filteredCountries.map((country) => (
                <div
                  className={cx(styles.country)}
                  onClick={(e) =>
                    handleCountryChange(e.currentTarget.dataset.country)
                  }
                  data-country={country}
                >
                  {country}
                </div>
              ))}
          </div>
        </div>
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
                <div className={styles.areaName}>{country}</div>
                <div className={styles.areaTotal}>
                  <div className={styles.secondaryInfo}>
                    {total.map(
                      (to) =>
                        to.combinedKey === country &&
                        to.confirmed
                          .toString()
                          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CountryPicker;
