//Импорт PNotify
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { error } from '@pnotify/core/dist/PNotify.js';

import refs from './refs';
import countryTempl from '../templates/countryTempl.hbs';
import countriesListTempl from '../templates/coyntriesListTempl.hbs';

function createCountriesMarkup(query) {
  let markup;
  if (query.length === 1) {
    markup = countryTempl(query);
  }
  if (query.length > 1 && query.length < 10) {
    markup = countriesListTempl(query);
  }

  if (query.length > 10 || query.length === undefined) {
    return error({
      title: 'Something goes wrong',
      text: 'We found to much countries or your query is not correct',
      delay: 2000,
    });
  }
  refs.countainerList.insertAdjacentHTML('beforeend', markup);
}

export default createCountriesMarkup;
