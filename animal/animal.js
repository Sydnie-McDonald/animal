import { animals } from '..data.js';
import { findById } from '../utils';

//search data
const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);
// grab DOM elements
const animalImg = document.getElementById('animal-img');
const animalInfo = document.getElementById('animal-data');
const animalQuote = document.getElementById('quote');

//animal element 
animalInfo.textContent = animal.name;
animalImg.src = `../assets/${animal.type}.svg`;
animalQuote.textContent = animal.says;
