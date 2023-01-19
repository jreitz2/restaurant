import './style.css'
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
// import each tab module here
import loadHome from './home-tab.js';
import loadAbout from './about-tab.js';
import loadMenu from './menu-tab.js';

import coffeeBeans from './assets/coffee-beans.jpg';
const homeBg = new Image();
homeBg.src = coffeeBeans;
const fbIcon = document.querySelector('.facebook');
fbIcon.src = facebook;
const instaIcon = document.querySelector('.instagram');
instaIcon.src = instagram;

// enter the code for tab switching here

function defaultHome() {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = "JavaScript Coffee";
    h2.textContent = "Your home for JS coffee puns!"
    content.append(homeBg);
    content.append(h1);
    content.append(h2);
};

defaultHome();
loadHome();
loadAbout();
loadMenu();