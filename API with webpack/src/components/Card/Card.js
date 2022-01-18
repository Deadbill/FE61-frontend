const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('img-style');
  img.src = props.src;

  const fullName = document.createElement('p');
  fullName.classList.add('title-style');
  fullName.innerText = props.name;

  const description = document.createElement('p');
  description.classList.add('text-style');
  description.innerText = props.description;

  container.append(img, fullName, description);
  return container;
};

export default Card;
