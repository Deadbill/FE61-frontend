import { FC } from 'react';
import styles from './NotFound.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleOnClick  = () => {
    navigate(`/`)
  };

  return (
    <div className={styles.not_found}>
      <div className={styles.wrapper}>
        <Button variant="contained" color="success" onClick={handleOnClick}>Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
