const wheatherApp = document.querySelector(".wheatherApp");
const contentBox = document.querySelector(".contentBox");
const pageNotFound = document.querySelector(".pageNotFound");
const reson = document.querySelector("#reson");
const input = document.getElementById("input");
const cityName = document.querySelector(".cityName");
const windVal = document.querySelector("#windVal");
const humidityVal = document.querySelector("#humidityVal");
const wheather_img = document.querySelector(".wheather_img");
const climate = document.querySelector(".climate");
const temp = document.querySelector(".temp")

async function checkWheather() {
  const api_key = "d81a115c23759c1c57de83e691ef4b11";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}`;
  const wheather_data = await fetch(url).then((res) => res.json());

  if (wheather_data.cod === `${400}` || wheather_data.cod === `${404}`) {
    pageNotFound.style.display = "flex";
    contentBox.style.display = "none";
    if (wheather_data.cod === `${400}`) {
      reson.innerHTML = `${wheather_data.message}`;
    } else if (wheather_data.cod === `${404}`) {
      reson.innerHTML = `${wheather_data.message}`;
    }
    return;
  } else {
    contentBox.style.display = "flex";
    pageNotFound.style.display = "none";
  }

  cityName.innerHTML = input.value;
  windVal.innerHTML = `${wheather_data.wind.speed}Km/h`;
  humidityVal.innerHTML = `${wheather_data.main.humidity}%`;
  climate.innerHTML = `${wheather_data.weather[0].main}`;
  temp.innerHTML=`${Math.round(wheather_data.main.temp - 273).toFixed(2)}°C`

  switch (wheather_data.weather[0].main) {
    case "Haze":
      wheather_img.src = "images/snowy.png";
      break;
    case "Clear":
      wheather_img.src = "images/clear.png";
      break;
    case "Clouds":
      wheather_img.src = "images/cloudy.png";
      break;
    case "Rain":
      wheather_img.src = "images/rain.png";
      break;
    case "Snow":
      wheather_img.src = "images/snowy.png";
      break;
    case "Haze":
      wheather_img.src = "images/snowy.png";
      break;
  }
}

function covertToupeercase() {
  input.value = input.value.toUpperCase();
}

const searchBox = document.querySelector(".img");
searchBox.addEventListener("click", checkWheather);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWheather();
  }
});
