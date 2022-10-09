import PropTypes from 'prop-types';
import css from './FriendItem.module.css'


export default function FriendItem({ avatar, name, isOnline }) {

    return (
        <li className={css.item}  >
            {(isOnline ? <span className={css.statusOnline}>{isOnline}</span> : <span className={css.inline}></span>)}
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.name}>{name}</p>
        </li>

    )
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}