import { FC } from 'react';

const Card: FC = ({ children }) => {
  return (
    <div className='card'>
      {children}
      <img src='' alt='img-card'></img>
      
    </div>
  );
};

export default Card;