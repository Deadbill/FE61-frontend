import { CircularProgress, FormControl, MenuItem, OutlinedInput, Select, } from '@mui/material';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './App.module.scss';
import { IBaseAllCountry } from '../api/getAllCountries';
import getAllCountries from '../api/getAllCountries';

interface ICountryChange {
  onChange?: void
}

const SelectChange: FC = () => {
  const [countries, setCountries] = useState<IBaseAllCountry[] | null>(null);
  const [personName, setPersonName] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string>();
  const fetchAllCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // setPersonName('value')
  }
  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className={styles.container}>
      Hello world
      {!countries && <CircularProgress color='secondary'/>}
      {countries && (
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={personName}
            key={'key'}
            // onChange={handleChangeCountry}
          >
            {countries.map((country) => (
              <MenuItem
                key={`${country.countryCode}${country.name}`}
                value={country.name}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${country.countryCode.toLowerCase()}.png 2x`}
                  alt={`Flag of ${country.name}`}
                />
                &nbsp
                {country.name} {country.countryCode}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default SelectChange;