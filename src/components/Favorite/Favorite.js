import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p>lorem ipsum</p>
      </div>
    );
};

export default Favorite;