import { useState } from 'react';

const ProfileForm = ({ user }) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handlePhotoSrcChange = (event) => {
    setPhotoSrc(event.target.value);
  }
  const labelsStyles = {
    display: 'flex',
    flexDirection: 'column',
  }
  const handleOnHobbyChange = (editableHobby) => (event) => {
    const newHobbies = hobbies.map((hobby) => ({ ...hobby}));
    const hobbyToUpdate = newHobbies.find((hobby) => editableHobby.id);
    hobbyToUpdate.name = event.target.value;
    setHobbies(newHobbies)
  };

  return (
    <div style={labelsStyles}>
      <label>
        First Name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        LastName Name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Photo src:
        <input value={photoSrc} onChange={handlePhotoSrcChange} />
      </label>
      <div>
        <strong>Hobbies</strong>
        {hobbies.map((hobby) => (
          <div key={hobby.id}>
            <input value={hobby.name} onChange={handleOnHobbyChange(hobby)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;
