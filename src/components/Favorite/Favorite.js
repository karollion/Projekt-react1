import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(state => getFavoritesCards(state));

    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} {...card} />)}
          </ul>
        </div>
      </div>
    );
};

export default Favorite;