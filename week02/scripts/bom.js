const input = document.querySelector("#favchap");
const button = document.querySelector("submit");
const list = document.querySelector("______");

const li = document.createElement("li");

const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append("deleteButton");

list.append("li")

button.addEventListener("click", function() {
    if (input.value.trim() !== '') { 
        console.log("")
     }
})

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });

  input.value = '';