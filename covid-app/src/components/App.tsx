import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getDefaultInfo, { IBaseDefaultInfo } from './api/getDefaultInfo';
import { Button, Stack } from '@mui/material';
import styles from './App.module.scss';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { CircularProgress, InputLabel } from '@mui/material';
import getAllCountries, { IBaseAllCountries } from './api/getAllCountries';


const App: FC = () => {
  const [countryInfo, setCountryInfo] = useState<IBaseDefaultInfo | null>(null);
  const [personName, setPersonName] = useState<string[]>([]);
  const [countries, setCountries] = useState<IBaseAllCountries[] | null>(null);
  const navigate = useNavigate();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const fetchAllCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };

  const handleOnClick = (name: string): void => {
    navigate(`/countries/${name}`)
  }

  const fetchCountryInfo = async () => {
    setCountryInfo(null);
    const newCountryInfo = await getDefaultInfo();

    setCountryInfo(newCountryInfo);
  };

  // const handleOnClick  = () => {
  //   navigate(`/countries`)
  // };
  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {
    fetchCountryInfo();
  },[]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>General Information</h1>
        <div className={styles.text}>
          Total number of cases: &nbsp;
          <span className={styles.color}>{countryInfo?.Global.TotalConfirmed}</span>
        </div>
        <div className={styles.text}>
          New cases: &nbsp;
          <span className={styles.color}>{countryInfo?.Global.NewConfirmed}</span>
        </div>
        <div className={styles.text}>
          Total number of deaths: &nbsp;
          <span className={styles.color}>{countryInfo?.Global.TotalDeaths}</span>
        </div>
        <div className={styles.text}>
          New deaths: &nbsp;
          <span className={styles.color}>{countryInfo?.Global.NewDeaths}</span>
        </div>
        {!countries && <CircularProgress color='secondary'/>}
        {countries && (
          <FormControl sx={{  m: 1, width: 300 }} color="error">
            <InputLabel id="demo-multiple-chip-label">Сountry</InputLabel>
            <Select
              value={personName}
              onChange={handleChange}
              MenuProps={MenuProps}
              key={'key'}
              label="Country"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
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
                  &nbsp;
                  {country.name} {country.countryCode}
                </MenuItem>
              ))}
            </Select>
            <Button sx={{ width: 120, mt: 5, ml: 10 }} onClick={() => personName[0] && handleOnClick(personName[0])} variant="contained" color="error">Show Info</Button>
          </FormControl>
        )}
         {/* <Stack direction="row" spacing={40} sx={{ mt: 5 }}>
          <Button variant="contained" color="success" onClick={handleOnClick}>Country Information</Button>
        </Stack> */}
      </div>
    </div>
  );
}

export default App;
