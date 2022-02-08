import { animals } from '..data.js';
import { findById } from '../utils';


//search data
const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animal);

// grab DOM elements
const animalImg = document.querySelector('.animal-img');
const animalInfo = document.querySelector('.animal-data');
const animalQuote = document.querySelector('.quote');

//animal element 
animalInfo.textContent = animal.name;
animalImg.src = `../assets/${animal.type}.svg`;
animalQuote.textContent = animal.says;

