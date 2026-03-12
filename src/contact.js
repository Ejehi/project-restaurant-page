export default function() {
    const mainContent = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Ember Kitchen";
    heading.classList.add("imperial-script-regular");

    const headline = document.createElement("h3");
    headline.textContent = "A Taste Forged in Golden Fire...";
    headline.classList.add("headline");

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");
    const phone = document.createElement("div");
    phone.textContent = "Call: +234 211 460 98500"

    const mail = document.createElement("div");
    mail.textContent = "Email: contact-us@emberkitchen.com"

    contactCard.appendChild(phone);
    contactCard.appendChild(mail);

    mainContent.appendChild(heading);
    mainContent.appendChild(headline);
    mainContent.appendChild(contactCard);
}