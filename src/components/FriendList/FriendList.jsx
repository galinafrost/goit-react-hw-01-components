import s from './styles.module.css';
import PropTypes from 'prop-types';
import ListItem from './Listitem';

export default function FriendList({ friends }) {
  const users = friends.map(user => (
    <ListItem
      avatar={user.avatar}
      name={user.name}
      isOnline={user.isOnline}
      key={user.id}
    />
  ));
  return <ul className={s.friend}>{users}</ul>;
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
