import generateJoke from './generate-joke.js';

const button = document.querySelector('button');
button.addEventListener('click', generateJoke);