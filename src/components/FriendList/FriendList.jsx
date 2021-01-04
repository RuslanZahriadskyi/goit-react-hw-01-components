import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <span
            className={`${s.onlineStatus} ${
              item.isOnline ? s.online : s.offline
            }`}
          ></span>
          <img className={s.avatar} src={item.avatar} alt="" width="48" />
          <p className={s.name}>{item.name}</p>
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
