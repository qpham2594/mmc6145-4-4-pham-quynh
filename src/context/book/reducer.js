// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  const {favBooks} = prevState
  switch (action) {
    case ADD_BOOK:
      const addingBookToList = [...favBooks, payload]
      saveToLocalStorage(addingBookToList)
      return {...prevState, favBooks: addingBookToList}
    case REMOVE_BOOK:
      const listUpdate = favBooks.reducer((book) => book.id !== payload)
      saveToLocalStorage(listUpdate)
        return {...prevState, favBooks: listUpdate }
    case SEARCH_BOOKS:
      return {...prevState, searchBooksResults:payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}