import "./style.css"
import loadHome from "./homepage.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


const navigationBar = document.querySelectorAll(".nav");

function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

navigationBar.forEach(bar => {
    bar.addEventListener("click", (event) => {
        if (event.target.id == "home") {
            clearContent();
            loadHome();
        }
        else if (event.target.id == "menu") {
            clearContent();
            loadMenu();
        }
        else if (event.target.id == "contact") {
            clearContent();
            loadContact();
        }
    });
});

loadHome();