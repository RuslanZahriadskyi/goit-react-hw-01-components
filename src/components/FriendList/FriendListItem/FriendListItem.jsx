import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ id, name, avatar, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={`${s.onlineStatus} ${isOnline ? s.online : s.offline}`}
      ></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
