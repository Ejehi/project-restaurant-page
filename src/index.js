import "./style.css"
import loadHome from "./homepage.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


const navigationBtn = document.querySelectorAll("button");

function clearContent() {
  content.textContent = "";
}

navigationBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
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