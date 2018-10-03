import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import {
    apiKey as key,
    url,
    sayHi,
    old,
    cat
} from './src/config';
console.log(key);
console.log(url);

sayHi('Ryan');

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

console.log(old, cat);