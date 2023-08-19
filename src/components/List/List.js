import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getColumnsByList } from '../../redux/columnsReducer';
import { getListById } from '../../redux/listsRedux';
import { useParams } from 'react-router';

const List = () => {
  const { listId } = useParams(); //  useParams zwraca obiekt z parametrami adresu (:listId z adresu w App.js)
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));
  if(!listData) return <Navigate to="/" /> // Jeśli podam zły adres listy w adresie to przeniesie na strone home
  
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;