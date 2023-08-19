
const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'SEARCH_STRING':
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;