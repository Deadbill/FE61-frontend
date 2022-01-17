const Card = (props) => {
  const container = document.createElement('div');

  container.classList.add('card');

  const img = document.createElement('img');
  img.src = props.src;

  container.append(img);

  return container;
};

export default Card;
