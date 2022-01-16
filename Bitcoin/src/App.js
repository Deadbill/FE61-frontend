import getBitcoinData from './apis/getBitcoinData';
import Dropdown from './components/Dropdown/Dropdown';
import LineChart from './components/LineChart';
import Currencies from './constants/Currencies';
// import ImgSrc from './img.jpg';

const createChart = async (currency = Currencies.AmericanDollars) => {
  const data = await getBitcoinData(currency);

  const lineChart = LineChart({ data: data.prices });

  return lineChart;
};

const App = async () => {
  const container = document.createElement('div');
  let lineChart = await createChart();

  const dropdown = Dropdown();

  dropdown.onchange = async (event) => {
    const currency = event.target.selectedOptions[0].value;

    container.removeChild(lineChart);
    lineChart = await createChart(currency);
    container.append(lineChart);
  };

  // const img = document.createElement('img');
  // img.src = ImgSrc;
  container.append(dropdown, lineChart);
  // container.append(lineChart, img);

  return container;
};

export default App;
