const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lastModified = document.querySelector("#lastModified");
let lastmodification = new Date(document.lastModified);
lastModified.innerHTML = `Last modification: <span class="highlight"> ${lastmodification}`;
