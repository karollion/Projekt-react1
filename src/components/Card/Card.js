import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';

const Card = props => {
    const dispatch = useDispatch();

    const favClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const deleteCard = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button 
                    className={clsx('fa fa-star-o', props.isFavorite === true && styles.favorite)} 
                    onClick={favClick}>
                </button>
                <button 
                    className={clsx('fa fa-trash', styles.trash)} 
                    onClick={deleteCard}>
                </button>
            </div>
        </li>
    );
};

export default Card;