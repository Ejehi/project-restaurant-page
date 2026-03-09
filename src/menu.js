import salmonImg from "./images/wood-fired-salmon.jpg"
import pastaImg from "./images/truffle-cream-pasta.jpg"
import steakImg from "./images/ember-grilled-ribeye-steak.jpg"
import cocktailImg from "./images/golden-ember-cocktail.jpg"
import midnightVelvetImg from "./images/midnight-velvet.jpg"
import spritzImg from "./images/citrus-flame-spritz.jpg"

export default function() {
    const mainContent = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Ember Kitchen";

    const headline = document.createElement("h3");
    headline.classList.add("headline");
    headline.textContent = "A Taste Forged in Golden Fire...";

    const menu = document.createElement("div");

// Signature Mains

    const signatureMains = document.createElement("h3");
    signatureMains.classList.add("menu-heading");
    signatureMains.textContent = "Signature Mains";

    const signatureMainsList = document.createElement("div");
    const woodFiredSalmonCard = document.createElement("div");
    woodFiredSalmonCard.classList.add("card");
    const woodFiredSalmon = document.createElement("div");
    const woodFiredSalmonDescription = document.createElement("div");
    const woodFiredSalmonPrice = document.createElement("div");
    const woodFiredSalmonImage = document.createElement("img");
    woodFiredSalmonImage.src = salmonImg;
    woodFiredSalmonImage.alt = "Wood-Fired Salmon";
    woodFiredSalmon.textContent = "Wood-Fired Salmon";
    woodFiredSalmonPrice.textContent = "40 000 NGN.";
    woodFiredSalmonDescription.textContent = "Atlantic salmon served with roasted vegetables";
    woodFiredSalmonCard.appendChild(woodFiredSalmon);
    woodFiredSalmonCard.appendChild(woodFiredSalmonDescription);
    woodFiredSalmonCard.appendChild(woodFiredSalmonPrice);
    woodFiredSalmonCard.appendChild(woodFiredSalmonImage);

    const truffleCreamPastaCard = document.createElement("div");
    truffleCreamPastaCard.classList.add("card");
    const truffleCreamPasta = document.createElement("div");
    const truffleCreamPastaDescription = document.createElement("div");
    const truffleCreamPastaPrice = document.createElement("div");
    const truffleCreamPastaImage = document.createElement("img");
    truffleCreamPastaImage.src = pastaImg;
    truffleCreamPastaImage.alt = "Truffle Cream Pasta";
    truffleCreamPasta.textContent = "Truffle Cream Pasta";
    truffleCreamPastaPrice.textContent = "20 000 NGN.";
    truffleCreamPastaDescription.textContent = "Handmade pasta in a rich black truffle cream sauce";
    truffleCreamPastaCard.appendChild(truffleCreamPasta);
    truffleCreamPastaCard.appendChild(truffleCreamPastaDescription);
    truffleCreamPastaCard.appendChild(truffleCreamPastaPrice);
    truffleCreamPastaCard.appendChild(truffleCreamPastaImage);


    const emberGrilledRibeyeSteakCard = document.createElement("div");
    emberGrilledRibeyeSteakCard.classList.add("card");
    const emberGrilledRibeyeSteak = document.createElement("div");
    const ribeyeSteakDescription = document.createElement("div");
    const ribeyeSteakPrice = document.createElement("div");
    const emberGrilledRibeyeSteakImage = document.createElement("img");
    emberGrilledRibeyeSteakImage.src = steakImg;
    emberGrilledRibeyeSteakImage.alt = "Ember-Grilled Ribeye Steak";
    emberGrilledRibeyeSteak.textContent = "Ember-Grilled Ribeye Steak";
    ribeyeSteakPrice.textContent = "35 000 NGN.";
    ribeyeSteakDescription.textContent = "Prime ribeye finished with garlic herb butter";
    emberGrilledRibeyeSteakCard.appendChild(emberGrilledRibeyeSteak);
    emberGrilledRibeyeSteakCard.appendChild(ribeyeSteakDescription);
    emberGrilledRibeyeSteakCard.appendChild(ribeyeSteakPrice);
    emberGrilledRibeyeSteakCard.appendChild(emberGrilledRibeyeSteakImage);


    signatureMainsList.appendChild(woodFiredSalmonCard);
    signatureMainsList.appendChild(truffleCreamPastaCard);
    signatureMainsList.appendChild(emberGrilledRibeyeSteakCard);

// Signature Drinks

    const signatureDrinks = document.createElement("h3");
    signatureDrinks.classList.add("menu-heading");
    signatureDrinks.textContent = "Signature Drinks";

    const signatureDrinksList = document.createElement("div");

    const goldenEmberCocktailCard = document.createElement("div");
    goldenEmberCocktailCard.classList.add("card");
    const goldenEmberCocktail = document.createElement("div");
    const goldenEmberCocktailDescription = document.createElement("div");
    const goldenEmberCocktailPrice = document.createElement("div");
    const goldenEmberCocktailImage = document.createElement("img");
    goldenEmberCocktailImage.src = cocktailImg;
    goldenEmberCocktailImage.alt = "Golden Ember Cocktail";
    goldenEmberCocktail.textContent = "Golden Ember Cocktail";
    goldenEmberCocktailPrice.textContent = "9 500 NGN.";
    goldenEmberCocktailDescription.textContent = "Bourbon, honey, smoked orange peel";
    goldenEmberCocktailCard.appendChild(goldenEmberCocktail);
    goldenEmberCocktailCard.appendChild(goldenEmberCocktailDescription);
    goldenEmberCocktailCard.appendChild(goldenEmberCocktailPrice);
    goldenEmberCocktailCard.appendChild(goldenEmberCocktailImage);


    const midnightVelvetCard = document.createElement("div");
    midnightVelvetCard.classList.add("card");
    const midnightVelvet = document.createElement("div");
    const midnightVelvetDescription = document.createElement("div");
    const midnightVelvetPrice = document.createElement("div");
    const midnightVelvetImage = document.createElement("img");
    midnightVelvetImage.src = midnightVelvetImg;
    midnightVelvetImage.alt = "Midnight Velvet";
    midnightVelvet.textContent = "Midnight Velvet";
    midnightVelvetPrice.textContent = "9 000 NGN.";
    midnightVelvetDescription.textContent = "Dark rum, chocolate bitters, and vanilla";
    midnightVelvetCard.appendChild(midnightVelvet);
    midnightVelvetCard.appendChild(midnightVelvetDescription);
    midnightVelvetCard.appendChild(midnightVelvetPrice);
    midnightVelvetCard.appendChild(midnightVelvetImage);


    const citrusFlameSpritzCard = document.createElement("div");
    citrusFlameSpritzCard.classList.add("card");
    const citrusFlameSpritz = document.createElement("div");
    const citrusFlameSpritzDescription = document.createElement("div");
    const citrusFlameSpritzPrice = document.createElement("div");
    const citrusFlameSpritzImage = document.createElement("img");
    citrusFlameSpritzImage.src = spritzImg;
    citrusFlameSpritzImage.alt = "Citrus Flame Spritz";
    citrusFlameSpritz.textContent = "Citrus Flame Spritz";
    citrusFlameSpritzPrice.textContent = "10 500 NGN.";
    citrusFlameSpritzDescription.textContent = "Sparkling wine with orange and grapefruit";
    citrusFlameSpritzCard.appendChild(citrusFlameSpritz);
    citrusFlameSpritzCard.appendChild(citrusFlameSpritzDescription);
    citrusFlameSpritzCard.appendChild(citrusFlameSpritzPrice);
    citrusFlameSpritzCard.appendChild(citrusFlameSpritzImage);


    signatureDrinksList.appendChild(goldenEmberCocktailCard);
    signatureDrinksList.appendChild(midnightVelvetCard);
    signatureDrinksList.appendChild(citrusFlameSpritzCard);


    menu.appendChild(signatureMains);
    menu.appendChild(signatureMainsList);
    menu.appendChild(signatureDrinks);
    menu.appendChild(signatureDrinksList);

    mainContent.appendChild(heading);
    mainContent.appendChild(headline);
    mainContent.appendChild(menu);
}