myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

// with .each
  const foodsElement1 = document.querySelector('#favorite-foods');
  function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement('li'); {
    favoriteFood.textContent = food;
    foodsElement1.appendChild(favoriteFood);
  }
  myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
  } 
