export default class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

    addBook = (title, author) => {
      const book = {
        title,
        author,
      };

      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
    };

    removeBook = (index) => {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
    };

    getBooks = () => this.books;
}
