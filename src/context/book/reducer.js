// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  const {favoriteBooks} = prevState
  switch (action) {
    case ADD_BOOK:
      const addingBookToList = [...favoriteBooks, payload]
      saveToLocalStorage(addingBookToList)
      return {...prevState, favoriteBooks: addingBookToList}
    case REMOVE_BOOK:
      const listUpdate = favoriteBooks.filter((book) => book.id !== payload)
      saveToLocalStorage(listUpdate)
        return {...prevState, favoriteBooks: listUpdate }
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults:payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}