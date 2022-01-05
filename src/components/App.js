import CardList from './CardList/CardList.js';

const getWantedPeople = async () => {

    const response = await fetch('https://api.fbi.gov/wanted/v1/list');

    const data = await response.json();
    console.log(data);

    return data.items.map((item) => {
        return {
            src: item.images[0].original,
            fullName: item.title,
            sex: item.sex,
            subjects: item.subjects[0],
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