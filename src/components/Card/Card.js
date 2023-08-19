import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();

    const favClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };
    return (
        <li className={styles.card}>
            {props.title}
            <button 
                className={clsx('fa fa-star-o', props.isFavorite === true && styles.favorite)} 
                onClick={favClick}>
            </button>
        </li>
    );
};

export default Card;