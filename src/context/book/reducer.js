// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

// Quynh's notes: Because of the need to saveToLocalStorage with each change, we can't just do something like {...prevState, favoriteBooks: payload} 
// because it won't save. So we create a variable to to include the list of favorite books, then the payload. Then we return the previous state
// in this case is the already save/established list, and then add the payload onto the list.
// For removing book, we check to see if the book.id is not on the current list, then the list will update to the new list without that book
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