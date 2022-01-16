import App from './src/App';

(async () => {
  const app = await App();
  const root = document.getElementById('root');
  root.append(app);
})();
