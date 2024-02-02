// TODO: Load/parse 'favoriteBooks' from localStorage
const listOfBooks = JSON.parse(localStorage.getItem('favoriteBooks'))

// TODO: Export initial state object as default
// initial state should have keys bookSearchResults and favoriteBooks
// bookSearchResults should be an empty array
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy
const initialState = {
    bookSearchResults: [],
    favoriteBooks: !listOfBooks ? [] : listOfBooks
}

export default initialState

// Quynh's note: do not forget the question mark - if there is no value from listOfBooks, then it will give empty array, otherwise, it will take the value from listOfBooks for favoriteBooks