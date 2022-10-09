import PropTypes from 'prop-types';
import css from './friendList.module.css';
import FriendItem from '../FriendItem/FriendItem'


export default function FriendList({ friends }) {
  return (
    <div className={css.friendSections}>
  <ul className={css.friendList}>
   {friends.map(({ name, avatar, isOnline, id }) => (

                    <FriendItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline} />

                ))}
  </ul></div>)
}

//  <li class="item">
// <span class="status"></span>
// <img class="avatar" src="" alt="User avatar" width="48" />
// <p class="name"></p>
//     </li>

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};
