import { FC, useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './CountryInfo.module.scss';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';


const CountryInfo: FC = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [dayResult, setDayResult] = useState<ICountryInfo[] | null>(null);

  const fetchCountryInfo = async (country: string) => {
    const covidInfo = await getCountryInfo(country);
    setDayResult(covidInfo);
  };

  const casesData = dayResult
  ? dayResult.map((elem) => [elem.Date, elem.Deaths, elem.Confirmed, elem.Recovered])
  : [];

  const data = [
    ["Year", "Death", "Confirmed", "Recorved"],
    ...casesData,
  ];

  const options = {
    title: "Statistical Data",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const handleOnClick  = () => {
    navigate(`/`)
  };

  useEffect(() => {
    fetchCountryInfo(country!);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Information on covid-19 in {country}</h1>
      <div className={styles.chart}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
      <div className={styles.button}>
        <Button variant="contained" color="success" onClick={handleOnClick}>Home</Button>
      </div>
    </div>
  );
};

export default CountryInfo;
