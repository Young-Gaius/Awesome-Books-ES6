const displayBooks = (library) => {
  const booksDiv = document.getElementById('books');

  booksDiv.innerHTML = '';

  if (library.getBooks().length === 0) {
    booksDiv.textContent = 'No books in the collection.';
    return;
  }

  library.getBooks().forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('book-title');
    titleSpan.textContent = book.title;

    const authorSpan = document.createElement('span');
    authorSpan.classList.add('book-author');
    authorSpan.textContent = `by ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('data-index', index);
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      library.removeBook(index);
    });

    bookDiv.appendChild(titleSpan);
    bookDiv.appendChild(authorSpan);
    bookDiv.appendChild(removeButton);
    booksDiv.appendChild(bookDiv);
  });
};
export default displayBooks;