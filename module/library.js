export default class Library {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books')) || [];
    }
}