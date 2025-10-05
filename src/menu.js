const title = "Our Shawarma Lineup";
const intro = "Every wrap, bowl, and platter is built fresh — marinated overnight, grilled to perfection, and served with love (and extra garlic sauce, if you know what’s up).";

const headerTwo = document.createElement('h2');
headerTwo.textContent = title;

const para = document.createElement('p');
para.textContent = intro;

const headerThree = document.createElement('h3');
headerThree.textContent = "Wraps"

const headerThreeOne = document.createElement('h4');
headerThreeOne.textContent = "Classic Chicken Shawarma"

const headerThreeOnePara = document.createElement('p');
headerThreeOnePara.textContent = "Marinated in our signature spice blend, grilled to juicy perfection, and wrapped with garlic sauce, pickles, and fries."



const menuContent = function() {
    const content = document.querySelector('#content');

    content.appendChild(headerTwo);
    content.appendChild(para);
    content.appendChild(headerThree);
    content.appendChild(headerThreeOne);
    content.appendChild(headerThreeOnePara);

}

export { menuContent };