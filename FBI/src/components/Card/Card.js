const Card = (props) => {
    const container = document.createElement('div');

    container.classList.add('card');

    const img = document.createElement('img');

    img.src = props.src;

    const fullName = document.createElement('p');
    fullName.classList.add('text-style');
    fullName.innerText = props.fullName;

    const sex = document.createElement('p');
    sex.classList.add('text-style');
    sex.innerText = props.sex;

    const subjects = document.createElement('p');
    subjects.classList.add('text-style');
    subjects.innerText = props.subjects;

    container.append(img, fullName, sex, subjects);

    return container;
};

export default Card;