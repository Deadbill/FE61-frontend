import getCatsImages from './API/Apis';
import CardList from './CardList/CardList';

const App = async () => {
  const container = document.createElement('div');
  const cardList = CardList({
    cards: await getCatsImages(),
  });

  container.append(cardList);

  return container;
};

export default App;
