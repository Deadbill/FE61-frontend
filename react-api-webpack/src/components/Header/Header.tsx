import { FC } from 'react';
import SvgSelector from '../SvgSelector/SvgSelector';
import '../../index.css';

const Header: FC = ({ children }) => {
  return (
    <div className='header'>
      {children}
      <SvgSelector id= "Lovecats"/>
      <h1 className='header-title'>
        Cat Breeds
      </h1>
      <SvgSelector id= "Footprint"/>
    </div>
  );
};

export default Header;