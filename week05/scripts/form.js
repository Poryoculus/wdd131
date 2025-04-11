const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");
const lastmodification = new Date(document.lastModified);
lastModified.innerHTML = `Last modification: <span class="highlight">${lastmodification.toLocaleString()}</span>`;

// products json
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const select = document.querySelector("#product-name");

function createProductoption() {
  products.forEach((product) => {
    select.innerHTML += `<option value="${product.id}">${product.name}</option>`;
  });
}

createProductoption();
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  // Obtener el valor actual del contador o iniciar en 0
  let formCount = Number(localStorage.getItem("formCount")) || 0;

  // Incrementar y guardar en localStorage
  formCount++;
  localStorage.setItem("formCount", formCount);
});
