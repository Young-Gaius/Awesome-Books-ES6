const booksDiv = document.getElementById('books');
const addBookForm = document.getElementById('addBookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const navLinks = document.getElementsByTagName('a');
const sections = document.getElementsByTagName('section');
const dateDisplay = document.querySelector('.currentDate');
const list = document.querySelector('.list-div');

export {
    booksDiv,
    addBookForm,
    titleInput,
    authorInput ,
    navLinks,
    sections,
    dateDisplay,
    list,
};