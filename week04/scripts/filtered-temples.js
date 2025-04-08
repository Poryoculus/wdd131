const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lastModified = document.querySelector("#lastModified");
let lastmodification = new Date(document.lastModified);
lastModified.textContent = `${lastmodification}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x640/slctemple8.jpg",
  },
  {
    templeName: "São Paulo Brasil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59579,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 5290,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg",
  },
  // Add more temple objects here...
];

const old = document.querySelector("#old");
old.addEventListener("click", () => {
  createTemples(
    temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    }),
  );
});

const newtemple = document.querySelector("#new");
newtemple.addEventListener("click", () => {
  createTemples(
    temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    }),
  );
});

const large = document.querySelector("#large");
large.addEventListener("click", () => {
  createTemples(temples.filter((temple) => temple.area > 90000));
});

const small = document.querySelector("#small");
small.addEventListener("click", () => {
  createTemples(temples.filter((temple) => temple.area < 10000));
});

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  createTemples(temples);
});

const cardContainer = document.querySelector("#container");

function createTemples(filteredtemples) {
  cardContainer.innerHTML = "";
  filteredtemples.forEach((temple) => {
    let card = document.createElement("section");
    let templeName = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let image = document.createElement("img");

    templeName.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    cardContainer.appendChild(card);
  });
}

createTemples(temples);

