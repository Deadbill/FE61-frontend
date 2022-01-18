/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import Header from './src/components/header/Header';
import App from './src/components/App';
import Footer from './src/components/Footer/Footer';
import './index.scss';

(async () => {
  const app = await App();

  const root = document.getElementById('root');
  root.append(app);
})();

const addHeader = Header();
root.before(addHeader);

const addFooter = Footer();
root.after(addFooter);
