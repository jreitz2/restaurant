import coffeeBeans2 from './assets/coffee-beans2.jpg';
const content = document.getElementById('content');
const menuTab = document.getElementById('menu');
const menuBg = new Image();
menuBg.src = coffeeBeans2;

export default function loadMenu () {
    menuTab.addEventListener('click', () => {
        content.innerHTML = '';
        const menuText = document.createElement('div');
        const menuHead = document.createElement('h3');
        menuHead.textContent = 'JavaScript Coffee';
        const item1 = document.createElement('div');
        item1.classList.add('menu-item');
        const item2 = document.createElement('div');
        item2.classList.add('menu-item');
        const item3 = document.createElement('div');
        item3.classList.add('menu-item');
        const item4 = document.createElement('div');
        menuText.classList.add("menu-text");
        
        item1.textContent = 'Const-accino $4';
        item2.textContent = 'Let-te $5';
        item3.textContent = 'Module-ato $5';
        item4.textContent = 'Slice in the Dark $5.50';
        
        content.append(menuText, menuBg);
        menuText.append(menuHead, item1, item2, item3, item4);
    })
}