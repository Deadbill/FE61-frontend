import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryInfo from './CountryInfo/CountryInfo';
import App from './App';
import NotFound from './notFound/NotFound';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/countries" element={<CountryInfo />} />
      <Route path="/countries/:country" element={<CountryInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
