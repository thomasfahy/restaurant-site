const createRestaurantContactPage = () => {
    const content = document.querySelector(".content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Contact us';
    pageContent.appendChild(headline);

    content.appendChild(pageContent);
}

export default createRestaurantContactPage;