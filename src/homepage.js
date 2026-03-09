import image from "./images/restaurant.jpg";

export default function() {
    const mainContent = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Ember Kitchen";

    const headline = document.createElement("h3");
    headline.classList.add("headline");
    headline.textContent = "A Taste Forged in Golden Fire...";

    const brandDescription = document.createElement("p");
    brandDescription.textContent = "Golden Ember Kitchen is a luxury dining experience where flame-crafted cuisine meets refined hospitality, blending rich flavors, elegant ambiance, and modern culinary artistry.";

    const restaurantImage = document.createElement("img");
    restaurantImage.src = image;
    restaurantImage.alt = "restaurant image";


    const restaurantView = document.createElement("div");
    const attribution = document.createElement("p");
    attribution.classList.add("attribution");

    const artistOfRestaurantImg = document.createElement("a");
    artistOfRestaurantImg.textContent = "Jason Leung";
    artistOfRestaurantImg.href = "https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    artistOfRestaurantImg.target = "_blank";
    artistOfRestaurantImg.rel = "noopener noreferrer";

    const resourceSiteOfRestaurantImg = document.createElement("a");
    resourceSiteOfRestaurantImg.textContent = "Unsplash";
    resourceSiteOfRestaurantImg.href = "https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    resourceSiteOfRestaurantImg.target = "_blank";
    resourceSiteOfRestaurantImg.rel = "noopener noreferrer";

    const artistSpan = document.createElement("span");
    artistSpan.textContent = "Photo by ";
    attribution.appendChild(artistSpan);
    attribution.appendChild(artistOfRestaurantImg);

    const resourceSpan = document.createElement("span");
    resourceSpan.textContent = " on ";
    attribution.appendChild(resourceSpan);
    attribution.appendChild(resourceSiteOfRestaurantImg);

    restaurantView.appendChild(restaurantImage);
    restaurantView.appendChild(attribution);


    mainContent.appendChild(heading);
    mainContent.appendChild(headline);
    mainContent.appendChild(restaurantView);
    mainContent.appendChild(brandDescription);
} 
