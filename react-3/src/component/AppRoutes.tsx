import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import CountryHoliday from './CountryHoliday/CountryHoliday';
import CountryInfo from './CountryInfo/CountryInfo';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/countries/:countryCode" element={<CountryInfo />} />
      <Route path="/countries/:countryCode/holidays" element={<CountryHoliday />} />
      <Route path="*" element="NOT FOUND" />
    </Routes>
  );
};

export default AppRoutes;