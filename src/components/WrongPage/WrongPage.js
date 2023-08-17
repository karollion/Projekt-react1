import styles from './WrongPage.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const WrongPage = () => {
    return (
      <div className={styles.wrong}>
        <PageTitle>404 Page not found</PageTitle>
      </div>
    );
};

export default WrongPage;