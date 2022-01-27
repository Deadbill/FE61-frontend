import React, { useEffect, useState } from 'react';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Profile from './components/Profile/Profile';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { TailSpin } from  'react-loader-spinner';
import getProfile from './api/getProfile';
import updateProfile from './api/updateProfile';

// const TEST_DATA = {
//   firstName: 'Vadim',
//   lastName: 'Pankov',
//   photoSrc: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
//   hobbies: [{id: 1 , name: 'music'},{id: 2, name: 'moto'}, {id: 3, name: 'games'}, {id: 4, name: 'front-end'}]
// };

const App = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [data,setData] = useState(null);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = async (newProfileData) => {
    const updateData = await updateProfile(newProfileData);
    setData(updateData);

    setIsEdit(false);
  };

  const userProfileContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 50px',
  };

  const fetchProfileData = async () => {
    const newData = await getProfile();

    setData(newData);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div>
      <div style={userProfileContainerStyles}>
        User Profile{' '}
        {!isEdit && data && (
          <ButtonLink onClick={handleEdit}>
            Edit
          </ButtonLink>
        )}
      </div>

      {!data && <TailSpin />}
      {!isEdit && data && <Profile user={data}/>}
      {isEdit && data && <ProfileForm user={data} onSave={handleSave} />}
    </div>
  );
};

export default App;
