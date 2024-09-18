import createRestaurantContactPage from "./contact";
import createRestaurantMenuPage from "./menu"
import createRestaurantHomePage from "./restaurant"


const createTabs = () => {
    const header = document.querySelector('.header');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-button');
    div2.setAttribute('id', 'menu-button');
    div3.setAttribute('id', 'contact-button');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createRestaurantMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createRestaurantContactPage();
    })

};

function clearContent() {
    const content = document.querySelector(".content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent){
        content.removeChild(pageContent);
    }
};

export default createTabs;