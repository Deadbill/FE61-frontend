import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const CountryHoliday: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/countries/${params.countryCode}`);
  }

  return (
    <div>
      Country Holidays: {params.countryCode}

      <Button onClick={handleOnClick}>Go To Country Info Page</Button>
    </div>
  );
};

export default CountryHoliday;
