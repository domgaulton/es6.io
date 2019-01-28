import { uniq } from 'lodash'; // Import a named export from loadash
import insane from 'insane';
import jsonp from 'jsonp';

import { apiKey as API, sayHi } from './src/config';

console.log(API); // API is apiKey but renamed

sayHi('Dom'); // Exported a function
