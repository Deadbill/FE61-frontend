import axios from 'axios';

export interface IBaseAllCountry {
  countryCode: string;
  name: string;
};

const getAllCountries = async (): Promise<IBaseAllCountry[]> => {
  const response = await axios.get<IBaseAllCountry[]>('https://date.nager.at/api/v3/AvailableCountries');

  return response.data;
};

export default getAllCountries;