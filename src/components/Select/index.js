import React, { useState, useEffect } from "react";
import {NativeSelect, FormControl} from  '@material-ui/core'
import styles from "./Select.module.css";
import { fetchCountries } from "../../api";


const Select = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetechedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
          setFetechedCountries(await fetchCountries());
        };
        fetchApi();
      }, []);
  return (
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="global">Global</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>        
    </FormControl>
  );
};
export default Select;
