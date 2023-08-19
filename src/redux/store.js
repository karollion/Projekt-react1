import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import listsReducer from './listsRedux'
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const  getFavoritesCards = ({cards}) => cards.filter(card => card.isFavorite === true);
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;
export const getSearchString = (state) => state.searchString;

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload});
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const searchString = payload => ({type: 'SEARCH_STRING', payload});
export const toggleCardFavorite = payload =>({type: 'TOGGLE_CARD_FAVORITE', payload});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;