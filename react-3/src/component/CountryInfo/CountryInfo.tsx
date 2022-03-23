import { Avatar, Button, CircularProgress, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';
import styles from './CountryInfo.module.scss';

const CountryInfo: FC = () => {
  const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const fetchCountryInfo = async () => {
    setCountryInfo(null);
    const newCountryInfo = await getCountryInfo(countryCode!);

    setCountryInfo(newCountryInfo);
  };

  const handleCountryClick = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}`)
  };

  const handleOnClick  = () => {
    navigate(`/`)
  };

  const handleOnHoliday = (countryCode: string) => {
    navigate(`/countries/${countryCode}/holidays`)
  };

  useEffect(() => {
    fetchCountryInfo();
  },[countryCode]);

  return (
    <div>
      {!countryInfo && <CircularProgress color="secondary" />}
      {countryInfo && (
        <div className={styles.cont}>
          <div className={styles.name}>{countryInfo.commonName} ({countryInfo.officialName}) - {countryInfo.region}</div>
          <div className={styles.code}>{countryInfo.countryCode}</div>
          <Stack direction="row" spacing={2} sx={{alignItems:'center', display:'inline-flex', flexDirection:'row'}}>
            {countryInfo.borders.map((info) => (
              <Avatar onClick={handleCountryClick(info.countryCode)} sx={{ width: 70, height: 70}}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${info.countryCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${info.countryCode.toLowerCase()}.png 2x`}
                  alt={`Flag of ${info.officialName}`}
                  className={styles.image}
                />
                {info.countryCode}
              </Avatar>
            ))}
          </Stack>
          <Stack direction="row" spacing={40} sx={{mt:20}}>
            <Button variant="contained" color="success" onClick={handleOnClick}>Go Back</Button>
            <Button variant="contained" color="error" onClick= {() => handleOnHoliday(countryInfo?.countryCode)}>Show Holiday</Button>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;