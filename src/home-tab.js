import coffeeBeans from './assets/coffee-beans.jpg';
const homeBg = new Image();
homeBg.src = coffeeBeans;
const content = document.getElementById('content');
const homeTab = document.getElementById('home');


export default function loadHome() {
    homeTab.addEventListener('click', () => {
        content.innerHTML = '';
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        h1.textContent = "JavaScript Coffee";
        h2.textContent = "Your home for JS coffee puns!"
        content.append(homeBg);
        content.append(h1);
        content.append(h2);
    });
};