import clsx from 'clsx';
import { useState } from 'react';
import styles from './CurrentDate.module.scss';

const CurrentDate = ({ prefix }) => {
  const [isBold, setIsBold] = useState(true);
  const now = new Date();

  const handleOnClick = () => {
    setIsBold(!isBold);
  };

  console.log('render');

  return (
    <div 
      className={clsx(styles.red, isBold && styles.bold)}
      onClick={handleOnClick}
    >
      {prefix} = {now.getSeconds()}
    </div>
  );
};

export default CurrentDate;
