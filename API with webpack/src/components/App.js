import CardList from './CardList/CardList.js';

const getWantedPeople = async () => {

    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        headers: {
            'x-api-key': '08b51de7-37f3-4863-b157-34e348301bda',
        },
    });

    const data = await response.json();
    console.log(data);

    return data.map((item) => {
        return {
            src: item.image?.url,
            name: item.name,
            description: item.description,
        }
    });
};

const App = async () => {
    const container = document.createElement('div');

    const cardList = CardList({
        cards: await getWantedPeople(),
    });
    
    container.append(cardList);

    return container;
};

export default App;