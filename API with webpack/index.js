import App from './src/components/App';

(async () => {
  const app = await App();

  const root = document.getElementById('root');
  root.append(app);
})();
