import s from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile(props) {
  const { url, tag, location, name, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className={s.profile__info}>
        <img
          src={url}
          alt="Аватар пользователя"
          className={s.avatar}
          width="100"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.component}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.component}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.component}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
