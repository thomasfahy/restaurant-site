// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector(".content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = 'restaurant.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our amazing restaurant!'
    pageContent.appendChild(headline);

    //create and append paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to Slice of Heaven, where every pizza is a masterpiece! Our artisan pies are crafted from the freshest ingredients, hand-tossed dough, and our signature sauces, ensuring a delicious experience in every bite. Whether you are craving classic pepperoni, gourmet toppings, or vegan options, we have something for everyone. Join us for dine-in, takeout, or delivery, and savor the perfect blend of flavors in a cozy atmosphere. At Slice of Heaven, we’re not just serving pizza; we’re creating memories, one slice at a time!';
    pageContent.appendChild(paragraph);
    
    //append new content to page
    content.appendChild(pageContent);
}

export default createRestaurantHomePage();
