import CardList from "./CardList.js/CardList";
import getWantedPeople from "./wantedAPI/wantedAPI";

const App = async () => {
  const container = document.createElement('div');
  const cardList = CardList({
    cards: await getWantedPeople()
  });
  container.append(cardList);
  return container;
};

export default App;