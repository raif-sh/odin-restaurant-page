const title = "Our Story — Wrapped in Flavor";
const intro = "It started with a simple craving — the kind you can’t shake off until you taste it.";

const headerTwo = document.createElement('h2');
headerTwo.textContent = title;

const para = document.createElement('p');
para.textContent = intro;

const aboutContent = function() {
    const content = document.querySelector('#content');

    content.appendChild(headerTwo);
    content.appendChild(para);

}

export { aboutContent };