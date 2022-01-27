import { useState } from 'react';
import uniqId from 'uniqid';

const ProfileForm = ({ user, onSave }) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [isLoading, setIsLoading] = useState(user.isLoading);

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

  const handleOnHobbyDelete = (hobbyToDelete) => {
    return () => {
        const filteredHobbies = hobbies.filter((hobby) => hobby.id !== hobbyToDelete.id);
        setHobbies(filteredHobbies);
    }
  }

  const handleOnHobbyAdd = () => {
    setHobbies([
      ...hobbies,
      {id: uniqId(), name: ''}
    ])
  }

  const handleOnHobbyChange = (editableHobby) => (event) => {
    const newHobbies = hobbies.map((hobby) => ({ ...hobby}));
    const hobbyToUpdate = newHobbies.find((hobby) => hobby.id === editableHobby.id);
    hobbyToUpdate.name = event.target.value;
    setHobbies(newHobbies)
  };

  const handeProfileSave = async () => {
  setIsLoading(true);

    await onSave({
      firstName,
      lastName,
      photoSrc,
      hobbies,
    })
  }

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
            <button onClick={handleOnHobbyDelete(hobby)}>&times;</button>
          </div>
        ))}
        <button onClick={handleOnHobbyAdd}>Add</button>
      </div>
      <button onClick={handeProfileSave} disabled={isLoading}>
        {isLoading ? 'Loading' : 'Save'}
      </button>
    </div>
  );
};

export default ProfileForm;
