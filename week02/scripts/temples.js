const year = document.querySelector("#currentyear")

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;



let lastModified = document.querySelector("#lastModified");
let lastmodification = new Date(document.lastModified);
lastModified.textContent = `${lastmodification}`;


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});