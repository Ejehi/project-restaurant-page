import salmonImg from "./images/wood-fired-salmon.jpg"
import pastaImg from "./images/truffle-cream-pasta.jpg"
import steakImg from "./images/ember-grilled-ribeye-steak.jpg"
import cocktailImg from "./images/golden-ember-cocktail.jpg"
import midnightVelvetImg from "./images/midnight-velvet.jpg"
import spritzImg from "./images/citrus-flame-spritz.jpg"

let signatureMainDishes = [
    {
      name: "Wood-Fired Salmon",
      price: "40 000 NGN.",
      description: "Atlantic salmon served with roasted vegetables",
      picture: salmonImg,
      alt: "Wood-Fired Salmon",
    },
    {
      name: "Truffle Cream Pasta",
      price: "20 000 NGN.",
      description: "Handmade pasta in a rich black truffle cream sauce",
      picture: pastaImg,
      alt: "Truffle Cream Pasta",
    },
    {
      name: "Ember-Grilled Ribeye Steak",
      price: "35 000 NGN.",
      description: "Prime ribeye finished with garlic herb butter",
      picture: steakImg,
      alt: "Ember-Grilled Ribeye Steak",
    }
];

let signatureMainDrinks = [
    {
      name: "Golden Ember Cocktail",
      price: "9 500 NGN.",
      description: "Bourbon, honey, smoked orange peel",
      picture: cocktailImg,
      alt: "Golden Ember Cocktail",
    },
    {
      name: "Midnight Velvet",
      price: "9 000 NGN.",
      description: "Dark rum, chocolate bitters, and vanilla",
      picture: midnightVelvetImg,
      alt: "Midnight Velvet",
    },
    {
      name: "Citrus Flame Spritz",
      price: "10 500 NGN.",
      description: "Sparkling wine with orange and grapefruit",
      picture: spritzImg,
      alt: "Citrus Flame Spritz",
    }
];


export default function() {
    const mainContent = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Ember Kitchen";
    heading.classList.add("imperial-script-regular");

    const headline = document.createElement("h3");
    headline.classList.add("headline");
    headline.textContent = "A Taste Forged in Golden Fire...";

    const menu = document.createElement("div");

// Signature Dishes

    const signatureMains = document.createElement("h3");
    signatureMains.classList.add("menu-heading");
    signatureMains.textContent = "Signature Mains";

    const signatureMainsList = document.createElement("div");

    for (let item of signatureMainDishes) {
        let card = document.createElement("div");
        card.classList.add("card");
        let dishNameField = document.createElement("div");
        dishNameField.textContent = item.name;
        let dishDescription = document.createElement("div");
        dishDescription.textContent = item.description;
        let dishPrice = document.createElement("div");
        dishPrice.textContent = item.price;
        let dishImage = document.createElement("img");
        dishImage.alt = item.alt;
        dishImage.src = item.picture;

        card.appendChild(dishNameField);
        card.appendChild(dishDescription);
        card.appendChild(dishPrice);
        card.appendChild(dishImage);

        signatureMainsList.appendChild(card);
    }

// Signature Drinks

    const signatureDrinks = document.createElement("h3");
    signatureDrinks.classList.add("menu-heading");
    signatureDrinks.textContent = "Signature Drinks";

    const signatureDrinksList = document.createElement("div");

    for (let item of signatureMainDrinks) {
        let card = document.createElement("div");
        card.classList.add("card");
        let drinkNameField = document.createElement("div");
        drinkNameField.textContent = item.name;
        let drinkDescription = document.createElement("div");
        drinkDescription.textContent = item.description;
        let drinkPrice = document.createElement("div");
        drinkPrice.textContent = item.price;
        let drinkImage = document.createElement("img");
        drinkImage.alt = item.alt;
        drinkImage.src = item.picture;

        card.appendChild(drinkNameField);
        card.appendChild(drinkDescription);
        card.appendChild(drinkPrice);
        card.appendChild(drinkImage);

        signatureDrinksList.appendChild(card);
    }

    menu.appendChild(signatureMains);
    menu.appendChild(signatureMainsList);
    menu.appendChild(signatureDrinks);
    menu.appendChild(signatureDrinksList);

    mainContent.appendChild(heading);
    mainContent.appendChild(headline);
    mainContent.appendChild(menu);
}