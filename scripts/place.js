const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lastModified = document.querySelector("#lastModified");
let lastmodification = new Date(document.lastModified);
lastModified.innerHTML = `Last modification: <span class="highlight"> ${lastmodification}`;

const winchillpara = document.querySelector("#windchill");

// You need to extract actual values for temperature and wind speed
const temperature = 53; // Example value for temperature
const windspeed = 6; // Example value for windspeed
const condition = "Cloudy"; // Example value for condition

document.querySelector("#tempe").innerHTML =
  `<strong>Temperature: </strong>${temperature}°F`;
document.querySelector("#wind").innerHTML =
  `<strong>Wind: </strong>${windspeed} mph`;
document.querySelector("#condition").innerHTML =
  `<strong>Condition: </strong>${condition}`;

function calculateWindChill(temp, windSpeed, unit = "F") {
  // Check if conditions for wind chill calculation are met
  if ((temp <= 50 && windSpeed > 3) || (temp <= 10 && windSpeed > 4.8)) {
    let windChill;

    // Wind Chill formula for Fahrenheit
    if (unit === "F") {
      windChill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16);
    } else {
      // Wind Chill formula for Celsius
      windChill =
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16);
    }

    // Display the calculated wind chill
    winchillpara.innerHTML = `<strong>Wind Chill: </strong>${Math.round(windChill)}°${unit}`;
  } else {
    // If conditions are not met, display "N/A"
    winchillpara.textContent = "Wind Chill: N/A";
  }
}

// Call the function with the current temperature and wind speed
calculateWindChill(temperature, windspeed, "F");
