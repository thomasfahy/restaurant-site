import createRestaurantHomePage from './restaurant'
import createRestaurantMenuPage from './restaurant'
import createRestaurantContactPage from './restaurant'
import createTabs from './tabs';

function initialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;