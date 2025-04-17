const fileJson = "data/structures.json";
const bussinessCard = document.querySelector("#pictures");

async function getBussinessData(file) {
  try {
    const response = await fetch(file);
    const data = await response.json();

    displayCards(data); // Passes the actual business data
  } catch (error) {
    console.error("Found an error:", error);
  }
}

const displayCards = (Cards) => {
  Object.values(Cards).forEach((business) => {
    const card = document.createElement("section");
    card.classList.add("card");

    const companyName = document.createElement("h2");
    companyName.textContent = business.name;

    const portrait = document.createElement("img");
    portrait.setAttribute("src", business.location);
    portrait.setAttribute("alt", business.name);
    if (Object.values(Cards).indexOf(business) > 1) {
      portrait.setAttribute("loading", "lazy");
    } else {
      portrait.setAttribute("fetchpriority", "high");
      portrait.setAttribute("rel", "preload");
    }
    portrait.classList.add("portrait");

    // Append elements to card
    card.appendChild(companyName);
    card.appendChild(portrait);
    // Append card to main container
    bussinessCard.appendChild(card);
  });
};
getBussinessData(fileJson);

function myFunction() {
  var x = document.querySelector(".navigation nav");
  x.style.display = x.style.display === "block" ? "none" : "block";
}

// Adjust navigation display on window resize
window.addEventListener("resize", function () {
  var x = document.querySelector(".navigation nav");
  x.style.display = window.innerWidth > 600 ? "flex" : "none";
});
// Footer script to display current year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Display last modification date
const lastModified = document.querySelector("#lastModification");
lastModified.textContent = `${new Date(document.lastModified)}`;
