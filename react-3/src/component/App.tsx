import { FC, useEffect, useState } from 'react';
import styles from './App.module.scss';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import getAllCountries, { IBaseAllCountry } from './api/getAllCountries';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, InputLabel } from '@mui/material';

const App: FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [countries, setCountries] = useState<IBaseAllCountry[] | null>(null);
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

  const handleOnClick = (countryCode: string): void => {
    navigate(`/countries/${countryCode}`)
  }

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Hi, friends! This is an interesting application that will show countries and their holidays.
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
                value={country.countryCode}
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
    </div>
  );
}

export default App;
