import styles from './Profile.module.scss';

const Profile = ({ user}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
        className={styles.profileImage}
        src={user.photoSrc}
        alt="profile-img"
        />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.name}>{user.firstName} {user.lastName}</div>
        <ul className={styles.hobbies}>
          {user.hobbies.map((hobby) => (
            <li key={hobby.id} className={styles.hobbiesItem}>
              {hobby.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
