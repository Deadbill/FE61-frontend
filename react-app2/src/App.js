import React, { useState } from 'react';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Profile from './components/Profile/Profile';
import ProfileForm from './components/ProfileForm/ProfileForm';

const TEST_DATA = {
  firstName: 'Dima',
  lastName: 'Drozd',
  photoSrc: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
  hobbies: [{id: 1 , name: 'music'},{id: 2, name: 'moto'}, {id: 3, name: 'games'}, {id: 4, name: 'front-end'}]
};

const App = () => {

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    setIsEdit(false);
  };

  const userProfileContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 50px',
  };

  return (
    <div>
      <div style={userProfileContainerStyles}>
        User Profile{' '}
        <ButtonLink onClick={isEdit ? handleSave : handleEdit}>
          {isEdit ? 'Save' : 'Edit'}
        </ButtonLink>
      </div>
      {!isEdit && <Profile user={TEST_DATA}/>}
      {isEdit && <ProfileForm user={TEST_DATA}/>}
    </div>
  );
};

export default App;
