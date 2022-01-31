import { FC } from 'react';
import { Button } from '@mui/material';

interface IHeaderProps {
  buttonText?: string;
  onClick?: () => void;
}

const Header: FC<IHeaderProps> = ({ children, buttonText = 'edit', onClick }) => {
  return (
    <h1>
      {children}
      <Button onClick={onClick}>{buttonText}</Button>
    </h1>
  );
};

export default Header;