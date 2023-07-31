import { getServices } from "./fetches.js";
const serviceMenu = document.querySelector(".services__tabs");
const serviceContainer = document.querySelector(".services__cards");
const tabLinks = document.querySelectorAll('.services__tab');
let services;

function createServiceElement(title, description, id) {
    const serviceIcons = {
        1: `assets/img/services/interior.svg`,
        2: `assets/img/services/architecture.svg`,
        3: `assets/img/services/planning.svg`,
    };

    const extraBrownClass = id === 2 ? ' services__card_brown' : '';
    const extraWhiteClass = id === 2 ? ' card__title_white' : '';

    return `<div class="services__card card${extraBrownClass}">
            <img src="${serviceIcons[id]}" class="card__icon" alt="service icon">
             <div>
             <h5 class="card__title${extraWhiteClass}">${title}</h5>
             <p class="card__description">${description}</p>
             </div>
           </div>`;
}

function fillServices(dataServices, serviceContainer) {
    serviceContainer.innerHTML = "";
    dataServices.forEach((element) => {
        let { postId, name, body } = element;
        serviceContainer.insertAdjacentHTML(
            "beforeend",
            createServiceElement(name, body, postId)
        );
    });
}

getServices().then((result) => {
    services = {
        interior: [],
        architecture: [],
        planning: [],
    };

    result.forEach((element) => {
        switch (element.postId) {
            case 1:
                services.interior.push(element);
                break;
            case 2:
                services.architecture.push(element);
                break;
            case 3:
                services.planning.push(element);
                break;
            default:
                break;
        }
    });

    fillServices(
        Object.values(services).map((item) => item[0]),
        serviceContainer
    );
});

serviceMenu.addEventListener("click", (event) => {
    const { target } = event;
    const attribute = target.getAttribute("data-type");
    tabLinks.forEach((tab) => {
      tab.className = tab.className.replace(' active', '');
    });
    event.target.className += ' active';

    if (target.closest(".services__tab")) {
        let data =
            attribute === "all"
                ? Object.values(services).map((item) => item[item.length - 1])
                : services[attribute];
        fillServices(data, serviceContainer, attribute);
    }
});
