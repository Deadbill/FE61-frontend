import { FC } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo: FC = () => {
  const params = useParams();

  return (
    <div>
      Country Info: {params.countryCode}
    </div>
  );
};

export default CountryInfo;