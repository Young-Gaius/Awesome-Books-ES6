import Library from './modules/library.js';
import displayBooks from './modules/display.js';
import handleFormSubmit from './modules/form.js';
import initializeNavLinks from './modules/navigation.js';
import initializeDateDisplay from './modules/date.js';

const library = new Library();

const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (event) => handleFormSubmit(event, library));

initializeNavLinks();
initializeDateDisplay();
displayBooks(library);
