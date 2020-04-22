import './css/styles.css';
//Импорт  lodash.debounce.
var debounce = require('lodash.debounce');

import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';
import countriesMarkup from './js/countriesMarkup.js';

function createMarkup(event) {
  event.preventDefault();
  fetchCountries(event.target.value).then(countriesMarkup);
  console.log(fetchCountries(event.target.value));
  refs.countainerList.innerHTML = '';
}

refs.input.addEventListener('input', debounce(createMarkup, 1000));
