// form count local storage
let formCount = Number(window.localStorage.getItem("formCount")) || 0;
const countDisplay = document.querySelector("#form-count");
countDisplay.textContent = formCount;

formCount++;
