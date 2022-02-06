import { Button, CircularProgress, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getHolidays, { IHoliday } from '../api/getHolidays';
import styles from './CountryHoliday.module.scss'

const CountryHoliday: FC = () => {
  const [holidays, setHolidays] = useState<IHoliday[] | null>(null);
  const { countryCode } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dateAsString = searchParams.get('data');
  const navigate = useNavigate();

  const handleOnBack = (countryCode: string) => {
    navigate(`/countries/${countryCode}`)
  };

  const handleOnYear = async (countryCode: string, year: number) => {
    const newHolidays = await getHolidays(countryCode!, year)
    setHolidays(newHolidays)
  };

  const fetchHolidays = async () => {
    const date = dateAsString
      ? new Date(dateAsString)
      : new Date();

    const newHolidays = await getHolidays(countryCode!, date.getFullYear());

    setHolidays(newHolidays);
  };

  useEffect(() => {
    fetchHolidays();
  },[]);

  return (
    <div className={styles.holiday}>
      <div>
        <Stack direction="row" spacing={40} sx={{ ml: 15 }}>
          <Button variant="contained" onClick={() => handleOnBack(countryCode!)}>Go Back</Button>
        </Stack>
      </div>
      <div className={styles.cont}>
        <div className={styles.title}>Holidays</div>
        { !holidays && <CircularProgress color="secondary" />}
        {holidays && holidays.map((info) => (
          <div className={styles.row} key={`${info.name}${info.date}`}>
            {info.localName} ({info.name}) - {info.date}
          </div>
        ))}
      </div>
      <div>
        <Stack direction="row" spacing={40} sx={{ ml: 0 }}>
          <Button variant="contained" onClick={() => handleOnYear(countryCode!, 2023)}>2023</Button>
        </Stack>
        <Stack direction="row" spacing={40} sx={{ ml: 0, mt: 2 }}>
          <Button variant="contained" color="error" onClick={() => handleOnYear(countryCode!, 2022)}>2022</Button>
        </Stack>
        <Stack direction="row" spacing={40} sx={{ ml: 0, mt: 2 }}>
          <Button variant="contained" onClick={() => handleOnYear(countryCode!, 2021)}>2021</Button>
        </Stack>
        <Stack direction="row" spacing={40} sx={{ mr: 15, mt: 2 }}>
          <Button variant="contained" color="error" onClick={() => handleOnYear(countryCode!, 2020)}>2020</Button>
        </Stack>
      </div>
    </div>
  );
};

export default CountryHoliday;
