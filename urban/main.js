const lamps = [
  {
    name: "Встраиваемый светильник Markt",
    cost: 5060,
    costWithProm: 3490,
    prom: true,
    image: "/images/1.png",
  },
  {
    name: "Линейный светильник ARG",
    cost: 6700,
    costWithProm: null,
    prom: false,
    image: "/images/2.png",
  },
  {
    name: "Светодиодный светильник",
    cost: 6060,
    costWithProm: 5060,
    prom: true,
    image: "/images/3.png",
  },
  {
    name: "Встраиваемый светильник Markt",
    cost: 5060,
    costWithProm: 3490,
    prom: true,
    image: "/images/1.png",
  },
  {
    name: "Линейный светильник ARG",
    cost: 6700,
    costWithProm: null,
    prom: false,
    image: "/images/2.png",
  },
  {
    name: "Светодиодный светильник",
    cost: 6060,
    costWithProm: 5060,
    prom: true,
    image: "/images/3.png",
  },
  {
    name: "Встраиваемый светильник Markt",
    cost: 5060,
    costWithProm: 3490,
    prom: true,
    image: "/images/1.png",
  },
  {
    name: "Линейный светильник ARG",
    cost: 6700,
    costWithProm: null,
    prom: false,
    image: "/images/2.png",
  },
];

function renderLampCards(lamps) {
  const container = document.getElementById("grid");

  lamps.forEach((lamp) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = lamp.image;
    img.className = "card-img";
    img.alt = lamp.name;

    const link = document.createElement("a");
    link.href = "#";
    link.appendChild(img);

    const name = document.createElement("div");
    name.className = "card-name";
    name.textContent = lamp.name;

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = `${lamp.cost} ₽`;

    const promButton = document.createElement("button");
    promButton.className = "promo-button";
    promButton.textContent = "Акция";

    const pricePromo = document.createElement("span");
    pricePromo.className = "price-promo";
    if (lamp.prom && lamp.costWithProm !== null) {
      pricePromo.textContent = `${lamp.costWithProm} ₽`;
      price.classList.add("grey");
      card.appendChild(promButton);
    }
    const priceBox = document.createElement("div");
    priceBox.className = "price-box";
    priceBox.appendChild(pricePromo);
    priceBox.appendChild(price);

    const button = document.createElement("button");
    button.className = "card-button";
    button.textContent = "Подробнее";

    const details = document.createElement("div");
    details.className = "card-details";
    details.appendChild(button);

    card.appendChild(link);
    card.appendChild(details);
    card.appendChild(name);
    card.appendChild(priceBox);

    container.appendChild(card);
  });
}

renderLampCards(lamps);

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
};

burger.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !menu.contains(event.target)) {
    burger.classList.remove("active");
    menu.classList.remove("active");
  }
});

menu.addEventListener("click", (event) => {
  event.stopPropagation();
});
