export default function() {
    const mainContent = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Ember Kitchen";

    const headline = document.createElement("h3");
    headline.textContent = "A Taste Forged in Golden Fire...";
    headline.classList.add("headline");

    const phone = document.createElement("p");
    phone.textContent = "Call: +234 211 460 98500"

    const mail = document.createElement("p");
    mail.textContent = "Email: contactus@goldenemberkitchen.com"


    mainContent.appendChild(heading);
    mainContent.appendChild(headline);
    mainContent.appendChild(phone);
    mainContent.appendChild(mail);
}