const handleFormSubmit = (event, library) => {
  event.preventDefault();

  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');

  library.addBook(titleInput.value, authorInput.value);

  titleInput.value = '';
  authorInput.value = '';
};
export default handleFormSubmit;