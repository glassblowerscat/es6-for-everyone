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
import User, { createURL, gravatar } from './src/user';

/* console.log(key);
console.log(url);

sayHi('Ryan');

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

console.log(old, cat); */

const ryan = new User('Ryan Elainska', 'glassblower.random@gmail.com', 'ryanelainska.com');

const profile = createURL(ryan.name);

const image = gravatar(ryan.email);

console.log(ryan);
console.log(profile);
console.log(image);