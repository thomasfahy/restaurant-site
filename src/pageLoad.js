import createRestaurantHomePage from './restaurant'
import createRestaurantMenuPage from './restaurant'
import createRestaurantContactPage from './restaurant'

function initialLoad() {
    createRestaurantHomePage();
}

navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case 'Home':
                createRestaurantHomePage();
                break;
            case 'Menu':
                createRestaurantMenuPage();
                break;
            case 'Contact':
                createRestaurantContactPage();
                break;
            default:
                console.log("Unknown button clicked!");
        }
    })
});





export default initialLoad;