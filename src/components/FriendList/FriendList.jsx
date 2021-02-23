import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ items }) {
  return (
    <ul>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
