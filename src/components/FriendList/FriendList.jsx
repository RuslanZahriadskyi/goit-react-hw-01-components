import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
          <span
            className={`${s.onlineStatus} ${isOnline ? s.online : s.offline}`}
          ></span>
          <img className={s.avatar} src={avatar} alt="" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
