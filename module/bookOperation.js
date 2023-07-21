import Library from './library.js';
import * as variable from '/variable.js';


const libraryControler = new Library (); 

const addBook = (title, author) => {
    const book = {
      title,
      author,
    };

    libraryControler.books.push(book);
    localStorage.setItem('books', JSON.stringify(libraryControler.books));
    displayBooks();
  }

  export const displayBooks = () => {
    variable.booksDiv.innerHTML = '';

    if ( libraryControler.books.length === 0) {
      variable.booksDiv.textContent = 'No books in the collection.';
      return;
    }

    libraryControler.books.forEach((book, index) => {
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
      removeBook(index);
      });

      bookDiv.appendChild(titleSpan);
      bookDiv.appendChild(authorSpan);
      bookDiv.appendChild(removeButton);
      this.booksDiv.appendChild(bookDiv);
    });
  }

  const removeBook = (index) => {
    libraryControler.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(libraryControler.books));
    displayBooks();
  }

  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    addBook(variable.titleInput.value, variable.authorInput.value);

    variable.titleInput.value = '';
    variable.authorInput.value = '';
  }

 export const handleFormSubmits = () => {  variable.addBookForm.addEventListener('submit', handleFormSubmit.bind(this));
 }
 export const initializeNavLinks = () => {
    variable.sections[0].style.display = 'none';

    for (let i = 0; i < variable.navLinks.length; i = +1) {
      variable.navLinks[i].addEventListener('click', () => {
        for (let j = 0; j < variable.sections.length; j = +1) {
          if (i === j) {
            variable.sections[j].style.display = 'block';
          } else {
            variable.sections[j].style.display = 'none';
          }
        }
      });
    }
  }



