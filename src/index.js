import './style.css'
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
// import each tab module here
import loadHome from './home-tab.js';
import loadAbout from './about-tab.js';
import loadMenu from './menu-tab.js';

const fbIcon = document.querySelector('.facebook');
fbIcon.src = facebook;
const instaIcon = document.querySelector('.instagram');
instaIcon.src = instagram;

// enter the code for tab switching here

loadHome();
loadAbout();
loadMenu();