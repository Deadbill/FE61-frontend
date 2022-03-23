import axios from 'axios';

export interface IBaseDefaultCountries {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  ID: string | number;
};

export interface IBaseDefaultInfo {
  ID: string | number; 
  Global: {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
  };
  Countries: IBaseDefaultCountries[];
};

const getDefaultInfo = async (): Promise<IBaseDefaultInfo> => {
  const response = await axios.get<IBaseDefaultInfo>('https://api.covid19api.com/summary');

  return response.data;
};

export default getDefaultInfo;