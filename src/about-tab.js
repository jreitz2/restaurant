import cappuccino from './assets/cappuccino.jpg';
const content = document.getElementById('content');
const cappuccinoImg = new Image();
cappuccinoImg.src = cappuccino;
const aboutTab = document.getElementById('about');

export default function loadAbout () {
    aboutTab.addEventListener('click', () => {
        content.innerHTML = '';
        const pic = document.createElement('div');
        const aboutText = document.createElement('div');
        aboutText.classList.add("about-text");
        aboutText.textContent = 'This is a totally fake coffeeshop! This website has been constructed as part of the Odin Project. This is the first time I have used Webpack!';
        pic.append(cappuccinoImg);
        content.append(pic, aboutText);
    })
}