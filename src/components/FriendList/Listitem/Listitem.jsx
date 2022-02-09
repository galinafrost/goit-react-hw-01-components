import s from './styles.module.css';
import PropTypes from 'prop-types';

export default function ListItem({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
  <span className={isOnline ? s.online : s.ofline}></span>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
  <p className={s.name}>{name}</p>
</li>
    )
}

ListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}