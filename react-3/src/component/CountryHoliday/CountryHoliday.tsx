import { CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import getHolidays, { IHoliday } from '../api/getHolidays';

const CountryHoliday: FC = () => {
  const [holidays, setHolidays] = useState<IHoliday[] | null>(null);
  const { countryCode } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dateAsString = searchParams.get('data');

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
    <div>
      { !holidays && <CircularProgress color="secondary" />}

      {holidays && holidays.map((info) => (
        <div key={`${info.name}${info.date}`}>
          {info.localName} ({info.name}) - {info.date}
        </div>
      ))}
    </div>
  );
};

export default CountryHoliday;
