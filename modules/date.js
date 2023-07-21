import { DateTime } from './luxon.js';

const initializeDateDisplay = () => {
  const dateDisplay = document.querySelector('.currentDate');
  const d = DateTime.now();

  dateDisplay.innerHTML = d.toFormat('MMMM dd yyyy, hh:mm:ss a');
};

export default initializeDateDisplay;
