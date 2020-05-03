import React, {useState, useEffect} from "react";
import styles from "./CountryPicker.module.css"
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetechedCountries ] = useState()
  useEffect(()=> {
    const fetchApi = async() => {
      setFetechedCountries(await fetchCountries())
    }
    fetchApi()
  }, [setFetechedCountries])
  
  return <div className={styles.tabCountry}>
  <div className={styles.info}>
    <div className={styles.areas}>
      {fetchedCountries && fetchedCountries.map((country, i) =>
        <div id={country} className={styles.divArea}>
        <div className={styles.country} key={i} 
        onClick={e => handleCountryChange(document.getElementById({country}))} >
          {country}
        </div>
        </div>
      )}
      </div>
    </div>
    </div>
};

export default CountryPicker;
