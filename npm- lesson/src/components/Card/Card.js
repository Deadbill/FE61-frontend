const Card = (props) => {
  const container =  document.createElement('div');
  const img =  document.createElement('img');
  const fullName =  document.createElement('i');
  const descriptions = document.createElement('p');
  const birthPlace = document.createElement('p');
  const race = document.createElement('p');
  const nationality = document.createElement('p');
  const rewardText = document.createElement('p');
  const details = document.createElement('p');
  img.src = props.src;
  fullName.innerText = props.fullName;
  descriptions.innerHTML = `<span> Descriptions: </span> ${props.descriptions}`;
  birthPlace.innerHTML = `<span> Place of Birth: </span> ${props.birthPlace === null ? '-' : props.birthPlace}`;
  race.innerHTML = `<span> Race: </span> ${props.race === null ? '-' : props.race}`;
  nationality.innerHTML = `<span> Nationality: </span> ${props.nationality === null ? '-' : props.nationality}`;
  details.innerHTML = `<span> Details: </span> ${props.details === null ? '-' : props.details}`;
  rewardText.innerHTML = `<span> Reward Text: </span> ${props.rewardText === null ? '-' : props.rewardText}`;

  img.classList.add('img');
  img.classList.add('img');
  container.append(img, fullName, birthPlace, race, nationality, rewardText, descriptions, details);
  container.classList.add('card');
  return container;
};

export default Card;