// Named export
export const apiKey = 'abc123';

export const url = 'http://ryanelainska.com'

export function sayHi(name) {
    console.log(`Hello there, ${name}`);
}

const age = 100;
const cat = 'Bubbles';

export { age as old, cat };